import { useEffect, useState } from "react";

const useRenderOnce = () => {
    const [rendered, setRendered] = useState<boolean>(false);
    useEffect(() => {
        setRendered(true);
    }, []);

    return !rendered;
};

export default useRenderOnce;