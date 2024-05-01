import styled from "@emotion/styled";
import { Container } from "../../Container/Container";
import { ILoader } from "../@types/type";
import { FormControl as BaseFormControl } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import Rating from "../../main-components/Product5n/internalComponents/Rating";

export async function loader({ params }: ILoader) {
    // objecto para pegar os produto da categoria correspondente;
    return { params };
}

export const CategoryContainer = styled['div']`
    width: 100%;
    min-height: 100vh;
`;
export const ProductContainer = styled(Container)`
    background-color: var(--White);
    margin: 0 auto;
`;
export const TopContainer = styled['section']`
    width: 100%;
    height: 45px;

    & > article {
        flex: 1 1 75px;
    }
`;

export const Container0 = styled['article']`
    justify-content: flex-end;
    & > div {
        flex: 1 1 180px;
    }
`;
export const SortByContainer = styled['div']`
    justify-content: flex-start;
`;
export const TextSortByContainer = styled['h1']`
    font: var(--Body-Small-400);
`;
export const SelectSort = styled['select']`
    font:var(--Body-Small-400);
    color:var(--Gray-600);
    cursor: pointer;
    background-color: transparent;
    border: 1px solid var(--Gray-100);
    padding: 0.35rem 0.7rem;
`;
export const OptionOrder = styled['option']``;
export const ButtonContainer = styled['div']``;
export const Button = styled['button']`
    padding: 0.635rem 1.05rem;
    background-color: var(--Success);
    border-radius: 50px;
`;
export const SpanButton = styled['span']`
    font: var(--Body-Tiny-600);
    color: var(--Gray-50);
`;
export const TextResult = styled['h1']`
    font: var(--Body-Small-400);
    text-align: right;
    text-transform: none;
`;

export const FormControl = styled(BaseFormControl)`
    border: none;
`;

// 

export const Frame345 = styled['div']`
    width: 100%;
    // background-color: red;
    padding: 0.5rem 0;

    gap: 0;
    justify-content: space-between;
    align-items: flex-start;
`;
const widthFilterContainer = "307px";
export const FilterContainer = styled['section']`
    width: ${widthFilterContainer};
    min-height: 185px;
    padding: 0 0.5rem 0 0;
`;

export const ContainerProducts = styled['nav']`
    width: calc(100% - ${widthFilterContainer});
    // background-color: brown;

    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
    grid-auto-flow: row;

    & > div {
        width: 100%;
        min-width: 255px;
        box-shadow: var(--box-shadow-outline);
    }
`;

export const ContainerAllCategories = styled['nav']`
    width: 100%;
    height: fit-content;
`;
export const ContainerCategory = styled['div']`
    display: block;
    width: 100%;
    min-height: 30px;
    padding: 0.4rem;
    // background-color: brown;
    margin: 0 0 10px 0;
`;

export const TitleCategoryContainer = styled(ContainerCategory)`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    // background-color: var(--Green-50);
`;
export const TitleCategory = styled['h1']`
    font: var(--Body-Medium-500);
    color: var(--Gray-900);
`;
export const ButtonTogglecontainer = styled['button']`
    width: 25%;
    min-width: 45px;
    justify-content: flex-end;
    padding: 2px 0;
    border-radius: 3px;
    background-color: transparent;
`;

// component complete
export const TitleCategoryComponentContainer = styled['div']`
    gap: 4px;
`;
export const Title4EachCategory = styled['h1']`
    font: var(--Body-Small-400);
    color: var(--Gray-900);
`;
export const SubText4EachCategory = styled['span']`
    font: var(--Body-Tiny-400);
    color: var(--Gray-500);
`;
export const TitleCategoryComponent: FC<{ title: string, quantidade: number }> = ({ quantidade, title }) => {
    return (
        <TitleCategoryComponentContainer className="d-flex">
            <Title4EachCategory>{title}</Title4EachCategory>
            <SubText4EachCategory>({quantidade})</SubText4EachCategory>
        </TitleCategoryComponentContainer>
    )
}
interface IStarAvaliacaoContainer {
    rating_number: number;
    label: string;
}
export const StarAvaliacaoContainer: FC<IStarAvaliacaoContainer> = ({ rating_number, label }) => {
    const BaseStarAvaliacaoContainer = styled['div']``;
    const LabelAvaliacao = styled['span']`
        font: var(--Body-Small-400);
        color: var(--Gray-900);
    `;
    return (
        <BaseStarAvaliacaoContainer className="d-flex">
            <Rating ratingNumber={rating_number} />
            <LabelAvaliacao>{label}</LabelAvaliacao>
        </BaseStarAvaliacaoContainer>
    );
};

interface IButtonTag {
    title: string;
}

export const ButtonTag: FC<IButtonTag> = ({ title }) => {
    const ButtonTagContainer = styled['span']`
        min-width: 69px;
        padding: 6px 18px;
        border-radius: 50px;
        background-color: var(--Gray-100);
        font: var(--Body-Small-400);
        color: var(--Gray-900);
        cursor: pointer;

        &.actived {
            color: var(--White);
            background-color: var(--Success);
        }
    `;
    const handleClickActive: MouseEventHandler<HTMLSpanElement> = (event) => {
        event.stopPropagation();
        const target = event.target as HTMLSpanElement;
        target.classList.toggle('actived');
    }
    return (
        <ButtonTagContainer onClick={handleClickActive}>{title}</ButtonTagContainer>
    )
}