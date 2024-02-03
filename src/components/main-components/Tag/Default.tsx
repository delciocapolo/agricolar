import { FC } from "react";

interface ITag {
    info: string;
    classNameTag?: string;
}

const Default:FC<ITag> = ({info, classNameTag='default'}) => {
    return <span className={`tag ${classNameTag}`}>{info}</span>;
}

export default Default;