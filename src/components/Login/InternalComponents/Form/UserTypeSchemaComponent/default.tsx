import styled from "@emotion/styled";
import { InputEmail } from "../BaseComponent/Inputs";
import { FC } from "react";
import { ISignunComponent } from "./signup";

const Container = styled['div']`
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--border-radius);
`;

const SignDefaultComponent: FC<ISignunComponent> = ({ content, setContent }) => {
    const handleCleanContentEmail: React.MouseEventHandler<HTMLButtonElement> = () => {
        setContent(prev => ({ ...prev, email: "" }));
    };

    return (
        <Container>
            <InputEmail
                key="email-input-default"
                content={content.email}
                handleCleanContent={handleCleanContentEmail}
                value={content.email}
                onChange={(event) => (setContent((prev) => ({ ...prev, email: event.target.value })))}
            />
        </Container>
    );
};

export default SignDefaultComponent;
