// delcioextensas2022@gmail.com
import { FC, FormEventHandler, useEffect, useState } from "react";
import { AccountContainer, ButtonSubmit, ContainerCustom, ContainerFixed, Form, iconConfig } from "./BaseComponent/BaseDefault";
import { UserType } from "./@types/userType";
import SigninComponent from "./UserTypeSchemaComponent/signin";
import SignunComponent from "./UserTypeSchemaComponent/signup";
import SignDefaultComponent from "./UserTypeSchemaComponent/default";
import { SignType } from "./@types/signType";
import { v4 as uuid } from "uuid";

import { gql, useLazyQuery, useMutation } from "@apollo/client";

import Divider from "../Divider";
import CardLinkAccountComponent from "../CardAccount";
import { Facebook02Icon, GoogleIcon } from "hugeicons-react";
import { Alert } from "@mui/material";
import ms from "ms";
import { ValidateEmail } from "./helpers/emailValidate";
import NIFValidate from "./helpers/nifValidate";
import BarLoader from "react-spinners/BarLoader";
import { ContentType } from "./@types/ContentType";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setExpiresDate } from "./helpers/expiresToDate";
import { loadCredentials } from "./helpers/loadCredentials";

const SchemaLoginComponent = () => {
    // Declaracao dos estados
    const [content, setContent] = useState<ContentType>({
        email: '',
        username: '',
        nif: '',
        password: '',
    });

    // Template String Query
    const GET_USER = gql`
    query User($USEREMAIL: String) {
        user(email: $USEREMAIL) {
          field
          status
          userid
        }
    }
    `;
    const CREATE_FARMER = gql`
    mutation CREATEFARMER($FAZENDEIROINPUT: FazendeiroInput, $LOCALIZACAOINPUT: LocalizacaoInput) {
        createFarmer(fazendeiro: $FAZENDEIROINPUT, localizacao: $LOCALIZACAOINPUT) {
            fazendeiro {
                email
            }
            token
        }
      }
    `;
    const CREATE_CUSTOMER = gql`mutation CreateCostumer($CONSUMIDOR_INPUT: ConsumidorInput, $LOCALIZACAO_INPUT: LocalizacaoInput) {
        createCostumer(consumidor: $CONSUMIDOR_INPUT, localizacao: $LOCALIZACAO_INPUT) {
          consumidor {
            id_consumidor
            nome_consumidor
            email
            sexo
            data_nascimento
            caminho_foto_consumidor
            createdAt
            localizacao {
              cidade
              provincia
            }
          }
          token
        }
      }`

    const [usertype, setUserType] = useState<UserType>("default");
    const [sign, setSign] = useState<SignType>("default");
    const [arrError, setArrError] = useState<string[]>([]);
    const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
    const [FarmerDispatch, { loading: loadingFarmerData, error: errorCreateFrmer, data: dataReturnedForFarmer }] = useMutation(CREATE_FARMER);
    const [CustomerDispatch, { loading: loadingCustomerData, error: errorCreateCustomer, data: dataReturnedForCustomer }] = useMutation(CREATE_CUSTOMER);
    const navigate = useNavigate();
    const [, setCookie] = useCookies();

    const UsertTypeSchema: FC<{ sign: SignType }> = ({ sign }) => {
        switch (sign) {
            case "default":
                return (<SignDefaultComponent content={content} setContent={setContent} />);
            case "sign":
                return (<SigninComponent user={usertype} />);
            case "signup":
                return (<SignunComponent user={usertype} set={setUserType} content={content} setContent={setContent} />);
            default:
                return <></>;
        }
    }

    const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        type canKeepOnType = {
            status: boolean;
            thereAreNIF: boolean
        };
        let canKeepOn: canKeepOnType = {
            status: true,
            thereAreNIF: false
        };

        // Limpeza dos dados
        for (let [name, value] of formData.entries()) {
            const thereAreValue = value.toString().trim();
            if (thereAreValue === '' || !thereAreValue) {
                setArrError(arr => ([...arr, `O campo ${name} não pode estar vazio!`]));
                canKeepOn = { ...canKeepOn, status: false };
                break;
            }

            if (name === 'email') {
                const sanitizacao = ValidateEmail(value.toString());
                if (sanitizacao && !sanitizacao.success) {
                    setArrError(arr => ([...arr, sanitizacao.message]));
                    canKeepOn = { ...canKeepOn, status: false };
                    break;
                }
            }

            if (name === 'nif' || name.includes('nif')) {
                const sanitizacao = NIFValidate(value.toString());
                if (sanitizacao && !sanitizacao.success) {
                    setArrError(arr => ([...arr, sanitizacao.message]));
                    canKeepOn = { ...canKeepOn, status: false };
                    break;
                }

                canKeepOn = { ...canKeepOn, thereAreNIF: true };
            }

            if (name === 'username' || name.includes('username')) {
                canKeepOn = { ...canKeepOn, thereAreNIF: true };
            }
        }

        switch (canKeepOn.status) {
            case true:
                const usermail = formData.get('email');
                const password = formData.get('password');
                const username = formData.get('username');

                getUser({
                    variables: {
                        "USEREMAIL": usermail
                    }
                });

                if (data) {
                    const { user: { field, status } } = data as {
                        user: {
                            field: UserType;
                            status: boolean;
                        }
                    };


                    const fetchProps = { method: "GET" };
                    const IPEndPoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_APIKEY_IPGEOLOCATION}`;
                    const IPDataFetch = await fetch(IPEndPoint, fetchProps);
                    const IPData = await IPDataFetch.json();

                    if (canKeepOn.thereAreNIF) {
                        const BIEndPoint = "http://localhost:5053/v1/bi";
                        const nif = formData.get('nif');

                        if (nif !== null && nif) {
                            const NIFDataFetch = await fetch(`${BIEndPoint}/${nif}`, fetchProps);
                            const NIFData = await NIFDataFetch.json();

                            if (NIFData && IPData) {
                                const { state_prov: province, city } = IPData;
                                const { numero, nome, data_nasc, genero, } = NIFData;

                                FarmerDispatch({
                                    variables: {
                                        "FAZENDEIROINPUT": {
                                            "bi_fazendeiro": numero,
                                            "nome_fazendeiro": nome,
                                            "email": usermail,
                                            "senha": password,
                                            "caminho_foto_fazendeiro": "/phot/fazendeiro",
                                            "sexo": genero,
                                            "data_nascimento": Date.parse(data_nasc),
                                        },
                                        "LOCALIZACAOINPUT": {
                                            "cidade": city,
                                            "provincia": province,
                                        }
                                    },
                                });
                            }
                        } else {
                            const { state_prov: province, city } = IPData;
                            CustomerDispatch({
                                variables: {
                                    "CONSUMIDOR_INPUT": {
                                        "nome_consumidor": username,
                                        "email": usermail,
                                        "senha": password,
                                        //   "sexo": "M",
                                        //   "data_nascimento": null,
                                        "caminho_foto_consumidor": "photo/consumidor"
                                    },
                                    "LOCALIZACAO_INPUT": {
                                        "provincia": province,
                                        "cidade": city
                                    }
                                }
                            })
                        }

                        // if (status) {
                        //     setArrError(arr => ([...arr, 'O email já está sendo utilizado']));
                        //     return;
                        // }
                        return;
                    }

                    setUserType(field);

                    if (status) {
                        setSign("sign");
                        return;
                    }

                    setSign("signup");
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (arrError.length !== 0) {
            const timeoutId = setTimeout(() => {
                setArrError([]);
            }, ms('4s'));

            return () => clearTimeout(timeoutId);
        }
    }, [arrError]);

    useEffect(() => {
        if (error) {
            console.error(error);
        }

        if (errorCreateFrmer) {
            console.error(errorCreateFrmer);
        }

        if (errorCreateCustomer) {
            console.error(errorCreateCustomer);
        }

    }, [errorCreateFrmer, errorCreateCustomer]);

    useEffect(() => {
        if (dataReturnedForFarmer) {
            const { email } = dataReturnedForFarmer["createFarmer"]['fazendeiro'];
            const { token } = dataReturnedForFarmer["createFarmer"];
            loadCredentials(email, token);
            setCookie('token', token, {
                sameSite: "lax",
                expires: setExpiresDate(30),
                secure: true
            });
            navigate('/');
        }

        if (dataReturnedForCustomer) {
            const { email } = dataReturnedForCustomer['createCostumer']['consumidor'];
            const { token } = dataReturnedForCustomer['createCostumer'];
            loadCredentials(email, token);
            setCookie('token', token, {
                sameSite: "lax",
                expires: setExpiresDate(30),
                secure: true
            });
            navigate('/');
        }
    }, [dataReturnedForFarmer, dataReturnedForCustomer])


    return (
        <Form
            action=""
            method="POST"
            onSubmit={handleSubmitForm}
        >
            <UsertTypeSchema sign={sign} />
            {
                (loading || loadingFarmerData || loadingCustomerData) && (
                    <ContainerCustom>
                        <BarLoader color="var(--Success)" />
                    </ContainerCustom>
                )
            }
            <ContainerCustom>
                <ButtonSubmit type="submit">Entrar</ButtonSubmit>
            </ContainerCustom>
            <ContainerCustom>
                <Divider content="acesso rápido" />
            </ContainerCustom>
            <AccountContainer>
                <CardLinkAccountComponent content="facebook" url="www.facebook.com" icon={<Facebook02Icon {...iconConfig} />} />
                <CardLinkAccountComponent content="google" url="www.facebook.com" icon={<GoogleIcon {...iconConfig} />} />
                <ContainerFixed>
                    {
                        arrError.map((messages) => (<Alert severity="error" key={uuid()}>{messages}</Alert>))
                    }
                </ContainerFixed>
            </AccountContainer>
        </Form>
    );
};

export default SchemaLoginComponent;