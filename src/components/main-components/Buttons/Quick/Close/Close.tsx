import { FC } from "react";
import { X } from "lucide-react";
import BaseQuickComponents from "../Base/BaseQuickComponents";

interface ICLose {
    size?: number;
}

const ButtonClose:FC<ICLose> = ({size}) => (
    <BaseQuickComponents classNameType="btn-eye-quickview">
        <X size={size} />
    </BaseQuickComponents>
);


export default ButtonClose;