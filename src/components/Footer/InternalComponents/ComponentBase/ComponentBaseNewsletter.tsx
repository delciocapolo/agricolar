import styled from "@emotion/styled";
import { Container as ContainerCentalized } from "../../../Container/Container";

// Component Style
export const NewsletterContainer = styled['div']`
    width: 100%;
    // background-color: brown;  
`;
export const Container = styled(ContainerCentalized)`
    margin: auto;
    padding: 2.5rem 0;
    justify-content: space-between;
    min-height: 0;
`;
export const ContainerBase = styled['div']`
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
    // background-color: purple;
`;
export const Title = styled['h1']`
    font: var(--Body-XXL-500);
    color: var(--Green-900);
    font-size: 1.2rem;
`;
export const Text = styled['span']`
    font: var(--Body-Small-400);
    color: var(--Green-400);
    font-size: 0.725rem;
`;
export const TextFieldContainer = styled['form']`
    width: 435px;
    gap: 0;
    justify-content: space-between;
    border-radius: 50px;
    background-color: var(--White);
    flex-wrap: nowrap;
`;

export const TextField = styled['input']`
    width: 64%;
    line-height: 3;
    padding: 0 1.5rem;
    border-radius: 50px;
    border: none;
    text-transform: none;

    &::place-holder {
        color: var(--Green-500);
        font: var(--Body-Medium-400);
    }
`;
export const ButtonSubscribe = styled['button']`
    background-color: var(--Success);
    color: var(--White);
    font: 1rem 'Poppins-semi-bold';
    line-height: 3;
    padding: 0 2rem;
    border-radius: 50px;
    min-width: 124px;
`;
