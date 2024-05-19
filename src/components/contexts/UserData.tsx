import React, { useContext, useState, createContext } from "react";
import { IContextComponent } from "./@types/defaultContextTypeComponent";

type UserPropsType = {
    token: string | null;
    name: string | null;
    email: string | null;
}

type UseDataType = {
    usercontext: UserPropsType;
    setUserContext: React.Dispatch<React.SetStateAction<UserPropsType>>;
}

const UserDataContext = createContext<UseDataType | null>(null);

export const UserDataProvider: React.FC<IContextComponent> = ({ children }) => {
    const [usercontext, setUserContext] = useState({} as UserPropsType);

    return (
        <UserDataContext.Provider value={{ usercontext, setUserContext }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => {
    const context = useContext(UserDataContext);

    if (!context) {
        throw new Error('useUserData must be used within a Component App or Parent');
    }

    return context;
}