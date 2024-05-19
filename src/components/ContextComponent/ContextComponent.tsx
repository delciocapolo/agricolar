import { FC, ReactNode, JSX } from "react";
import { HeaderContextProvider } from "../contexts/HeaderContext";
import { ProductdetailsProvider } from "../contexts/ProductDetails";
import { UserDataProvider } from "../contexts/UserData";

interface IContextComponent {
    children: JSX.Element | ReactNode;
}

const ContextComponent: FC<IContextComponent> = ({ children }) => {
    return (
        <UserDataProvider>
            <HeaderContextProvider>
                <ProductdetailsProvider>
                    {children}
                </ProductdetailsProvider>
            </HeaderContextProvider>
        </UserDataProvider>
    );
};

export default ContextComponent;
