import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type HeaderContextType = {
    actived: boolean;
    setActived: Dispatch<SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);

export const HeaderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [actived, setActived] = useState(false);

    return (
        <HeaderContext.Provider value={{ actived, setActived }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => {
    const context = useContext(HeaderContext);

    if (!context) {
        throw new Error('useHeaderContext must be used within a HeaderContextProvider');
    }
    return context;
};
