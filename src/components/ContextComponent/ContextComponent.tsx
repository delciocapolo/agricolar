import { FC, ReactNode, JSX } from "react";
import { HeaderContextProvider } from "../contexts/HeaderContext";
import { ProductdetailsProvider } from "../contexts/ProductDetails";

interface IContextComponent {
    children: JSX.Element | ReactNode
}

const ContextComponent: FC<IContextComponent> = ({ children }) => {
    return (
        <HeaderContextProvider>
            <ProductdetailsProvider>
                {
                    children
                }
            </ProductdetailsProvider>
        </HeaderContextProvider>
    );
};

export default ContextComponent;
