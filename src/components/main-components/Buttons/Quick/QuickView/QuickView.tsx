import { FC } from "react";
import { Eye } from "lucide-react";
import BaseQuickComponents from "../Base/BaseQuickComponents";

interface IQuickView {
    size?: number;
}

const QuickView:FC<IQuickView> = ({size}) => (
    <BaseQuickComponents classNameType="btn-eye-quickview">
        <Eye size={size} />
    </BaseQuickComponents>
);


export default QuickView;