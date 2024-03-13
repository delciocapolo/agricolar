import { FC, ReactNode, createContext, useState } from "react";

interface IPadding {
    padding: string | number;
}

export const PaddingContext = createContext<IPadding>({} as IPadding);

export const PaddingProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [padding, _] = useState<IPadding>({
        padding: '0 3.5rem'
    });

    return (
        <PaddingContext.Provider value={padding}>
            {children}
        </PaddingContext.Provider>
    )
}