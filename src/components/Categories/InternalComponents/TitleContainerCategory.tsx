import React, { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
    ButtonTogglecontainer,
    TitleCategoryContainer,
    TitleCategory
} from "./BaseCategory";
interface ITitleContainerCategory {
    title: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
const TitleContainerCategory: FC<ITitleContainerCategory> = ({ title, state, setState }) => {
    const handleClickToggle = () => {
        setState((prev) => (!prev));
    }

    return (
        <TitleCategoryContainer>
            <TitleCategory>{title}</TitleCategory>
            <ButtonTogglecontainer className="d-flex" onClick={handleClickToggle}>
                {
                    state ? (
                        <ChevronUp color="var(--Gray-900)" />
                    ) : (
                        <ChevronDown color="var(--Gray-900)" />
                    )
                }
            </ButtonTogglecontainer>
        </TitleCategoryContainer>
    );
};

export default TitleContainerCategory;
