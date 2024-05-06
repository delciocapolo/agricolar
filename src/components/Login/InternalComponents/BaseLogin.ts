import styled from "@emotion/styled";
import { Container as BaseContainer } from "../../Container/Container";

export const Container = styled(BaseContainer)`
    margin: 2% auto;
    padding: 0 1.3rem;
    gap: 0;

    // background-color: var(--White);
    box-shadow: var(--box-shadow-double-face);
    border-radius: var(--border-radius);
    background-image: url('/src/assets/login/screen_2.jpg');
`;

export const LoginContainer = styled['section']`
    width: 100%;
    background-color: var(--Green-50);
    min-height: 100vh;
`;

export const ContentContainer = styled['article']`
    flex: 2 1 200px;
    align-items: flex-start;
    justify-content: flex-start;

    min-height: 615px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.65);
    flex-direction: column;
    border-radius: var(--border-radius);
    backdrop-filter: blur(25px);

    position: relative;
`;

export const FormContainer = styled['article']`
    flex: 1 1 150px;
    min-height: 350px;
    padding: 20px;
    // background-color: red;
`;

export const Header = styled['h1']`
    padding: 0 3rem;
    text-transform: none;
    font: var(--Body-XL-500);
    color: var(--Green-900);
`;
export const ContentHeaderContainer = styled['div']`
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    padding: 0.5rem;
    background-color: var(--Green-100);
    border-radius: var(--border-radius);

    &:last-of-type {
        bottom: 20px;
        right: 20px;
    }
`;