import { Cancel01Icon } from "hugeicons-react";
import { ChangeEventHandler, FC, useState } from "react";
import { ButtonClean, Container, Input } from "./BaseDefault";

type InputType = {
    name?: string;
    placeholder?: string;
}

export const InputEmail = () => {
    const [content, setContent] = useState<string>("");

    const handleCleanContent = () => {
        setContent("");
    };
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setContent(event.target.value);
    };

    return (
        <Container className="d-flex">
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={content}
                onChange={handleChange}
                inputMode="text"
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

export const InputText: FC<InputType> = ({ name = "Nome", placeholder }) => {
    const [content, setContent] = useState<string>("");

    const handleCleanContent = () => {
        setContent("");
    };
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setContent(event.target.value);
    };

    return (
        <Container className="d-flex">
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                value={content}
                onChange={handleChange}
                inputMode="text"
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

export const InputPassword: FC<InputType> = ({ name = "Nome", placeholder }) => {
    const [content, setContent] = useState<string>("");

    const handleCleanContent = () => {
        setContent("");
    };
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setContent(event.target.value);
    };

    return (
        <Container className="d-flex">
            <Input
                type="password"
                name={name}
                placeholder={placeholder}
                value={content}
                onChange={handleChange}
                inputMode="text"
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