import styled from "@emotion/styled";
import { Form as BaseForm } from "react-router-dom";

export const Form = styled(BaseForm)`
    height: fit-content;
    min-width: 270px;
    // min-height: 350px;
    padding: 0.9rem;
    background-color: var(--White);

    border-radius: var(--border-radius);

    position: relative;
    right: 55%;
`;

// Schema.tsx

export const ContainerCustom = styled['div']`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    margin: 0 0 10px 0;

    &:last-of-type {
        margin: 0;
    }
`;
export const AccountContainer = styled(ContainerCustom)`
    flex-direction: column;
    gap: 7px;
`;
export const ButtonSubmit = styled['button']`
    padding: 0.65rem 0;
    font: var(--Body-Small-400);
    border-radius: var(--border-radius);
    flex: 1 1 120px;
    background-color: var(--Green-700);
    color: var(--White);
    transition: 0.32s ease-in;
`;
export const iconConfig = {
    size: 22,
    color: "var(--Green-700)",
    strokeWidth: 2
};
export const ContainerFixed = styled['div']`
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 2;
    transition: 0.3s transform ease-in-out;
`;

// Inputs

export const Container = styled['div']`
    width: 100%;
    height: 45px;
    max-height: 55px;
    gap: 0;
    background-color: var(--Green-50);
    border-radius: var(--border-radius);
    outline: 1px solid var(--Green-700);
`;
export const Input = styled['input']`
    height: 100%;
    flex: 15 1 135px;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    border: none;
    padding: 0 1.05rem;
    font: var(--Body-Small-400);
    background-color: transparent;
    color: var( --Green-700);
    text-transform: none;

    &::placeholder {
        color: var( --Green-600);
    }
`;
export const ButtonClean = styled['button']`
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    background-color: transparent;
    flex: 3 1 30px;
    height: 100%;
`;