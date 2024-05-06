import styled from "@emotion/styled";
import { InputEmail } from "../BaseComponent/Inputs";

const Container = styled['div']`
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--border-radius);
`;

const SignDefaultComponent = () => {
    return (
        <Container>
            <InputEmail />
        </Container>
    );
};

export default SignDefaultComponent;
