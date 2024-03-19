import styled from "@emotion/styled";
import { Container } from "../../Container/Container";

const heightGeneral = 'calc(100vh - 350px)';

export const ImageOFFContainer = styled(Container)`
    min-height: 0;
    height: ${heightGeneral};
    padding: 0;
    margin: auto;
    background-color: red;
    gap: 0;

    background-color: brown;

    justify-content: space-between;
`;

export const ImageContainer = styled['div']`
    width: 50%;
    height: ${heightGeneral};
    padding: 0;
    position: relative;
    background-color: yellow;
`;

export const Image = styled['img']`
    width: 100%;
    min-height: 275px;
    height: 100%;
    object-fit: contain;
`;

export const OFF = styled['div']`
    position: absolute;
    border-radius: 50%;
    width: 95px;
    height: 95px;
    background-color: var(--Warning);

    right: 30px;
    top: 18%;
    // transform: rotate(20deg);
    padding-top: 0.7rem;

    gap: 0;
    flex-direction: column;

    & > * {
        color: var(--White);
    }
`;

export const PorcentText = styled['h1']`
    font: var(--Display05-600);
    font-size: 1.8rem;
    text-align: center;
    line-height: 1;
    transition: 0.2s ease-in;
`;

export const OFFText = styled['span']`
    font: var(--Large-Caps-Lock);
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.2s ease-in;
`;