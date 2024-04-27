import React, { createContext, ReactNode, useContext, useState } from 'react';

type ProductDetailsType = {
    actived: boolean;
    id: string;
}

type ProductdetailsType = {
    details: ProductDetailsType;
    setDetails: React.Dispatch<React.SetStateAction<ProductDetailsType>>;
};

export const ProductdetalisContext = createContext<ProductdetailsType | null>(null);

export const ProductdetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
        throw new Error('useHeaderContext must be used within a ProductdetalisContext');
    }
    return context;
};
