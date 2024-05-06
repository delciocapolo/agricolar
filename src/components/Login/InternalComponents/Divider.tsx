import React, { JSX } from "react";
import styled from "styled-components";

interface IDivider {
    content?: string;
}

export default function Divider({ content }: IDivider) {
    const Container = styled['div']`
        width: 100%;
        gap: 3px;
        flex-wrap: nowrap;
    `;
    const Line = styled['hr']`
        height: 0;
        border: none;
        border-top: 1px solid rgba(51, 51, 51, 0.3);
        flex: 1 1 25px;
    `;
    const Content = styled['span']`
        font: var(--Body-Tiny-400);
        background-color: rgba(51, 51, 51, 0.05);
        border-radius: 50px;
        padding: 2px 0;
        flex: 1 1 fit-content;
        text-align: center;
        color: var(--Gray-900);
    `;

    return (
        <Container className="d-flex">
            <Line />
            {
                content && (
                    <React.Fragment>
                        <Content>{content}</Content>
                        <Line />
                    </React.Fragment>
                )
            }
        </Container>
    )
}