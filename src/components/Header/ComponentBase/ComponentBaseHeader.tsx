import styled from "@emotion/styled";

export const Image = styled['img']`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const OFF = styled['div']`
    position: absolute;
    border-radius: 50%;
    width: 95px;
    height: 95px;
    background-color: var(--Warning);

    right: 30px;
    top: 10%;
    transform: rotate(20deg);
    padding-top: 0.7rem;

    gap: 0;
    flex-direction: column;

    & > * {
        color: var(--White);
    }
`;

export const ImageOFFContainer = styled['div']`
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
`;

export const ImageContainer = styled['div']`
    width: 50%;
    height: 430px;
    position: relative;
    background-color: transparent;
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