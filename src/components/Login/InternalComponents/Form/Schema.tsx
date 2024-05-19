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
        query USER($usermail: String) {
            user(email: $usermail) {
                field
                status
            }
        }
    `;
    const CREATE_FARMER = gql`
        mutation CREATEFARMER(
            $DATA_FAZENDEIRO: FazendeiroInput
            $DATA_LOCALIZACAO: LocalizacaoInput
        ) {
            createFarmer(
            fazendeiro: $DATA_FAZENDEIRO
            localizacao: $DATA_LOCALIZACAO
            ) {
                token
            }
        }
    `;

    const [usertype, setUserType] = useState<UserType>("default");
    const [sign, setSign] = useState<SignType>("default");
    const [arrError, setArrError] = useState<string[]>([]);
    const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
    const [FarmerDispatch, { loading: loadingFarmerData, error: errorCreateFrmer, data: dataReturnedForFarmer }] = useMutation(CREATE_FARMER);

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
                    variables: { usermail }
                });

                if (data) {
                    const { user: { field, status } } = data as {
                        user: {
                            field: UserType;
                            status: boolean;
                        }
                    };

                    if (canKeepOn.thereAreNIF) {
                        // const BIEndPoint = "http://localhost:5055/v1/bi";
                        // const IPEndPoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_APIKEY_IPGEOLOCATION}`;
                        // const fetchProps = { method: "GET" };
                        const nif = formData.get('nif');

                        if (nif !== null && nif) {
                            // const [NIFDataFetch, IPDataFetch] = await Promise.all([
                            //     fetch(`${BIEndPoint}/${nif}`, fetchProps),
                            //     fetch(IPEndPoint, fetchProps)
                            // ]).then(resolve => resolve.map(response => response.json()));
                            // const NIFData = await NIFDataFetch;
                            // const IPData = await IPDataFetch;

                            // if (NIFData && IPData) {
                            //     const { state_prov: province, city } = IPData;
                            //     // const {} = NIFData;
                            //     console.log(province, city);
                            // }
                            FarmerDispatch({
                                variables: {
                                    "DATA_FAZENDEIRO": {
                                        "nome_fazendeiro": username,
                                        "email": usermail,
                                        "senha": password,
                                        "caminho_foto_fazendeiro": "foto/fazendeiro",
                                        "sexo": "M",
                                        "data_nascimento": new Date().getTime(),
                                    },
                                    "DATA_LOCALIZACAO": {
                                        "cidade": "Zona cultivo",
                                        "provincia": "Huambo"
                                    }
                                },
                            });

                            if (errorCreateFrmer) {
                                console.error(errorCreateFrmer)
                            }

                            if (loadingFarmerData) {
                                console.log('Query is runing yet');
                            }

                            if (dataReturnedForFarmer) {
                                console.log(dataReturnedForFarmer);
                            }
                        } else {
                            console.log('USER IS LOGGING IN NORMAL MODE!');
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

        if (error) {
            console.log(error);
        }
    }, [arrError, error]);

    return (
        <Form
            action=""
            method="POST"
            onSubmit={handleSubmitForm}
        >
            <UsertTypeSchema sign={sign} />
            {
                loading && (
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