import React, { FC, Fragment, MouseEvent, useRef } from "react";
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
                    <InputText name="nif" placeholder="NIF" />
                    <InputPassword name="password" placeholder="Palavra-Passe" />
                </ContainerBaseSign>
            );
        case "customer":
            return (
                <h1>singun customer</h1>
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
