import React, { FC, Fragment } from "react";
import { UserType } from "../@types/userType";
import { TabUserType } from "./BaseComponent/BaseSign";
import SignDefaultComponent from "./default";
import { ContainerBaseSign } from "./BaseComponent/BaseSigun";
import { InputEmail, InputPassword, InputText } from "../BaseComponent/Inputs";

interface ISignunComponent {
    user: UserType;
    set: React.Dispatch<React.SetStateAction<UserType>>
};

const SignunComponent: FC<ISignunComponent> = ({ user, set }) => {
    switch (user) {
        case "farmer":
            return (
                <ContainerBaseSign>
                    <InputEmail />
                    <InputText name="username" placeholder="Nome de fazendeiro" />
                    <InputText name="nif" placeholder="NIF" />
                    <InputPassword name="password" placeholder="Palavra-Passe" />
                </ContainerBaseSign>
            );
        case "customer":
            return (
                <ContainerBaseSign>
                    <InputEmail />
                    <InputText name="username" placeholder="Nome de usuário" />
                    <InputPassword name="password" placeholder="Palavra-Passe" />
                </ContainerBaseSign>
            );
        case "default":
            return (
                <Fragment>
                    <TabUserType state={user} set={set} />
                    <SignDefaultComponent />
                </Fragment>
            );
        default:
            return <></>;
    }
};

export default SignunComponent;
