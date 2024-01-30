import { FC } from "react";
import { X } from "lucide-react";
import BaseQuickComponents from "../Base/BaseQuickComponents";

interface ISocialMedia {
    size?: number;
}

export const ButtonFacebok:FC<ISocialMedia> = ({size}) => (
    <BaseQuickComponents classNameType="btn-socialMedia-quickview">
        <X size={size} />
    </BaseQuickComponents>
);
export const ButtonTwitter:FC<ISocialMedia> = ({size}) => (
    <BaseQuickComponents classNameType="btn-socialMedia-quickview">
        <X size={size} />
    </BaseQuickComponents>
);
export const ButtonInstagram:FC<ISocialMedia> = ({size}) => (
    <BaseQuickComponents classNameType="btn-socialMedia-quickview">
        <X size={size} />
    </BaseQuickComponents>
);
export const ButtonCopyLink:FC<ISocialMedia> = ({size}) => (
    <BaseQuickComponents classNameType="btn-socialMedia-quickview">
        <X size={size} />
    </BaseQuickComponents>
);
