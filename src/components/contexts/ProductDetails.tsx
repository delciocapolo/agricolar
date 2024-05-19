import React, { createContext, useContext, useState } from 'react';
import { IContextComponent } from './@types/defaultContextTypeComponent';

type ProductDetailsType = {
    actived: boolean;
    id: string;
}

type ProductdetailsType = {
    details: ProductDetailsType;
    setDetails: React.Dispatch<React.SetStateAction<ProductDetailsType>>;
};

const ProductdetalisContext = createContext<ProductdetailsType | null>(null);

export const ProductdetailsProvider: React.FC<IContextComponent> = ({ children }) => {
    const [details, setDetails] = useState({} as ProductDetailsType);

    return (
        <ProductdetalisContext.Provider value={{ details, setDetails }}>
            {children}
        </ProductdetalisContext.Provider>
    );
};

export const useProductdetails = () => {
    const context = useContext(ProductdetalisContext);

    if (!context) {
        throw new Error('useProductdetails must be used within a Component App or Parent');
    }
    return context;
};
