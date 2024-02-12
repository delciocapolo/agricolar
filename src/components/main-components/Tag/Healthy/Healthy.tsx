import { FC } from "react";

interface IHealthy {
    info?: string;
}

const Default:FC<IHealthy> = ({info = 'Healthy'}) => (<span className="healthy">{info}</span>);

export default Default;