import styled from "@emotion/styled";
import { FC } from "react";

const SelectOptionContainer = styled['select']`
    color: var(--Gray-600);
    border: none;
    padding: 0.3rem 17px;
    cursor: pointer;
    background-color: transparent;
`;
const ItemSelectContainer = styled['option']`
    [selected] {
        display: none;
    }
`;

interface IOptionLangs {
    langs: string[];
}

const SelectOptions: FC<IOptionLangs> = ({ langs }) => {
    return (
        <SelectOptionContainer name="langs" id="langs">
            {
                langs.map((lang) => (<ItemSelectContainer value={lang}>{lang}</ItemSelectContainer>))
            }
        </SelectOptionContainer>
    )
};

export default SelectOptions;