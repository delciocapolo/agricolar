import { Cancel01Icon } from "hugeicons-react";
import React, { FC } from "react";
import { ButtonClean, Container, Input } from "./BaseDefault";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
    content: string;
    handleCleanContent: React.MouseEventHandler<HTMLButtonElement>;
};

export const InputEmail: FC<InputType> = ({ content, handleCleanContent, ...props }) => {
    return (
        <Container className="d-flex">
            <Input
                type="email"
                name="email"
                placeholder="Email"
                inputMode="text"
                {...props}
            />
            {
                (content !== "") && (
                    <ButtonClean className="d-flex" onClick={handleCleanContent} type="button">
                        <Cancel01Icon size={15} strokeWidth={2} color="var(--Green-700)" />
                    </ButtonClean>
                )
            }
        </Container>
    );
};

export const InputText: FC<InputType> = ({ content, handleCleanContent, ...props }) => {

    return (
        <Container className="d-flex">
            <Input
                type="text"
                inputMode="text"
                {...props}
            />
            {
                content && (
                    <ButtonClean className="d-flex" onClick={handleCleanContent} type="button">
                        <Cancel01Icon size={15} strokeWidth={2} color="var(--Green-700)" />
                    </ButtonClean>
                )
            }
        </Container>
    );
};

export const InputPassword: FC<InputType> = ({ content, handleCleanContent, ...props }) => {
    return (
        <Container className="d-flex">
            <Input
                type="password"
                inputMode="text"
                {...props}
            />
            {
                content && (
                    <ButtonClean className="d-flex" onClick={handleCleanContent} type="button">
                        <Cancel01Icon size={15} strokeWidth={2} color="var(--Green-700)" />
                    </ButtonClean>
                )
            }
        </Container>
    );
};