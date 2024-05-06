import { FC } from "react";
import { UserType } from "../@types/userType";

const SigninComponent: FC<{ user: UserType }> = ({ user }) => {
    switch (user) {
        case "farmer":
            return (
                <h1>singin farmer</h1>
            );
        case "customer":
            return (
                <h1>singin customer</h1>
            );
        case "default":
            return (
                <h1>default customer</h1>
            );
        default:
            return <></>;
    }
};

export default SigninComponent;
