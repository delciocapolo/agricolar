import { ChevronRight } from "lucide-react";
import { FC } from "react"

interface IReadMore {
    text?: string;
}

export const BtnReadMore: FC<IReadMore> = ({text}) => {
    const size:number = 19;

    if(!text) return null;

    return (
        <a className="btn-all d-flex" href="/readmore" target="_self" rel="noopener noreferrer">
            { text }
            <ChevronRight size={size}/>
        </a>
    )
}

export const BtnGettingStart = () => {
    return (
        <button className="button-one">

        </button>
    )
}

export const All = () => {
    return (
        <button className="button-one">

        </button>
    )
}