import React, { FC, Fragment } from "react";
import { UserType } from "../@types/userType";
import { TabUserType } from "./BaseComponent/BaseSign";
import SignDefaultComponent from "./default";
import { ContainerBaseSign } from "./BaseComponent/BaseSigun";
import { InputEmail, InputPassword, InputText } from "../BaseComponent/Inputs";
import { ContentType } from "../@types/ContentType";

export interface ISignunComponent {
    user?: UserType;
    set?: React.Dispatch<React.SetStateAction<UserType>>;
    content: ContentType;
    setContent: React.Dispatch<React.SetStateAction<ContentType>>;
};

const SignunComponent: FC<ISignunComponent> = ({ user, set, content, setContent }) => {
    const handleCleanContentEmail: React.MouseEventHandler<HTMLButtonElement> = () => {
        setContent(prev => ({ ...prev, email: "" }));
    };
    const handleCleanContentNIF: React.MouseEventHandler<HTMLButtonElement> = () => {
        setContent(prev => ({ ...prev, nif: "" }));
    };
    const handleCleanContentUsername: React.MouseEventHandler<HTMLButtonElement> = () => {
        setContent(prev => ({ ...prev, username: "" }));
    };
    const handleCleanContentPassword: React.MouseEventHandler<HTMLButtonElement> = () => {
        setContent(prev => ({ ...prev, password: "" }));
    };

    switch (user) {
        case "farmer":
            return (
                <ContainerBaseSign>
                    <InputEmail
                        handleCleanContent={handleCleanContentEmail}
                        key="email-input-farmer"
                        content={content.email}
                        value={content.email}
                        onChange={(event) => (setContent((prev) => ({ ...prev, email: event.target.value })))}
                    />
                    <InputText
                        handleCleanContent={handleCleanContentUsername}
                        key="username-input-farmer"
                        content={content.username}
                        name="username"
                        placeholder="Nome de fazendeiro"
                        value={content.username}
                        onChange={(event) => (setContent((prev) => ({ ...prev, username: event.target.value })))}
                    />
                    <InputText
                        handleCleanContent={handleCleanContentNIF}
                        key="nif-input-farmer"
                        content={content.nif}
                        name="nif" placeholder="NIF"
                        value={content.nif}
                        onChange={(event) => (setContent((prev) => ({ ...prev, nif: event.target.value })))}
                    />
                    <InputPassword
                        handleCleanContent={handleCleanContentPassword}
                        key="password-input-farmer"
                        content={content.password}
                        name="password"
                        placeholder="Palavra-Passe"
                        value={content.password}
                        onChange={(event) => (setContent((prev) => ({ ...prev, password: event.target.value })))}
                    />
                </ContainerBaseSign>
            );
        case "customer":
            return (
                <ContainerBaseSign>
                    <InputEmail
                        handleCleanContent={handleCleanContentEmail}
                        key="email-input-customer"
                        content={content.email}
                        value={content.email}
                        onChange={(event) => (setContent((prev) => ({ ...prev, email: event.target.value })))}
                    />
                    <InputText
                        handleCleanContent={handleCleanContentUsername}
                        key="username-input-customer"
                        content={content.username}
                        name="username"
                        placeholder="Nome de usuário"
                        value={content.username}
                        onChange={(event) => (setContent((prev) => ({ ...prev, username: event.target.value })))}
                    />
                    <InputPassword
                        handleCleanContent={handleCleanContentPassword}
                        key="password-input-customer"
                        content={content.password}
                        name="password"
                        placeholder="Palavra-Passe"
                        value={content.password}
                        onChange={(event) => (setContent((prev) => ({ ...prev, password: event.target.value })))}
                    />
                </ContainerBaseSign>
            );
        case "default":
            return (
                <Fragment>
                    <TabUserType state={user} set={set!} />
                    {/* <SignDefaultComponent content={content} setContent={setContent} /> */}
                </Fragment>
            );
        default:
            return <></>;
    }
};

export default SignunComponent;
