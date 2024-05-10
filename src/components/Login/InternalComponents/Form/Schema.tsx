// delcioextensas2022@gmail.com

import { FC, FormEventHandler, useEffect, useState } from "react";
import { AccountContainer, ButtonSubmit, ContainerCustom, ContainerFixed, Form, iconConfig } from "./BaseComponent/BaseDefault";
import { UserType } from "./@types/userType";
import SigninComponent from "./UserTypeSchemaComponent/signin";
import SignunComponent from "./UserTypeSchemaComponent/signup";
import SignDefaultComponent from "./UserTypeSchemaComponent/default";
import { SignType } from "./@types/signType";
import { v4 as uuid } from "uuid";

import { gql, useLazyQuery } from "@apollo/client";

import Divider from "../Divider";
import CardLinkAccountComponent from "../CardAccount";
import { Facebook02Icon, GoogleIcon } from "hugeicons-react";
import { Alert } from "@mui/material";
import ms from "ms";
import { ValidateEmail } from "./helpers/emailValidate";
import NIFValidate from "./helpers/nifValidate";
import BarLoader from "react-spinners/BarLoader";

const SchemaLoginComponent = () => {
    // Template String Query
    const GET_USER = gql`
        query USER($usermail: String) {
            user(email: $usermail) {
                field
                status
            }
        }
    `;

    const [usertype, setUserType] = useState<UserType>("default");
    const [sign, setSign] = useState<SignType>("default");
    const [arrError, setArrError] = useState<string[]>([]);
    const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

    const UsertTypeSchema: FC<{ sign: SignType }> = ({ sign }) => {
        switch (sign) {
            case "default":
                return (
                    <SignDefaultComponent />
                );
            case "sign":
                return (
                    <SigninComponent user={usertype} />
                );
            case "signup":
                return (
                    <SignunComponent user={usertype} set={setUserType} />
                );

            default:
                return <></>;
        }
    }

    const handleSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
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