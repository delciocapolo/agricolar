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

// import Divider from '@mui/material/Divider';
// import Chip from '@mui/material/Chip';

import Divider from "../Divider";
import CardLinkAccountComponent from "../CardAccount";
import { Facebook02Icon, GoogleIcon } from "hugeicons-react";
import { Alert } from "@mui/material";
import ms from "ms";
import { ValidateEmail } from "./helpers/emailValidate";
import NIFValidate from "./helpers/nifValidate";

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
    const [isLogging, setIsLogging] = useState<boolean>(true);


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

        for (let [name, value] of formData.entries()) {
            if (!value.toString().trim()) {
                setArrError(arr => ([...arr, `O campo ${name} não pode estar vazio!`]));
                break;
            }

            if (name === 'email') {
                const sanitizacao = ValidateEmail(value.toString());
                if (sanitizacao && !sanitizacao.success) {
                    setArrError(arr => ([...arr, sanitizacao.message]));
                    break;
                }
            }

            if (isLogging) {
                const _ = getUser({
                    variables: {
                        usermail: value
                    }
                });

                if (data) {
                    const { user: { field, status } } = data as {
                        user: {
                            field: UserType;
                            status: boolean;
                        }
                    };
        
                    setUserType(field);
        
                    if (status) {
                        setSign("sign");
                        return;
                    }
        
                    if (!status) {
                        setSign("signup");
                        return;
                    }
                }

                setIsLogging(false);
            }
            console.log(isLogging);

            if (name === 'nif' || name.includes('nif')) {
                const sanitizacao = NIFValidate(value.toString());
                if (sanitizacao && !sanitizacao.success) {
                    setArrError(arr => ([...arr, sanitizacao.message]));
                    break;
                }
            }
        }
    }

    useEffect(() => {
        if (arrError.length !== 0) {
            setTimeout(() => {
                setArrError([]);
            }, ms('4s'));
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
                        <span>carregando</span>
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