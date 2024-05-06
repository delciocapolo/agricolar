import { Cancel01Icon } from "hugeicons-react";
import { ChangeEventHandler, useState } from "react";
import styled from "styled-components"
import { ButtonClean, Container, Input } from "./BaseDefault";

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
            />
            {
                content && (
                    <ButtonClean className="d-flex" onClick={handleCleanContent} type="button">
                        <Cancel01Icon size={15} strokeWidth={2} color="var(--Green-700)" />
                    </ButtonClean>
                )
            }
        </Container>
    )
}