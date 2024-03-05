import styled from "@emotion/styled";
import Box from "../../TopLevelComponent/Box/Box";
import { FC } from "react";

interface IFeature {
    icon: JSX.Element;
    title: string;
    text?: string;
}

const Feature: FC<IFeature> = ({ icon, text, title }) => {
    const Content = styled(Box)`
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    `;

    const Title = styled['h1'](_ => ({ font: 'var(--Body-Medium-600)', color: 'var(--Gray-900)', textTransform: 'none' }));
    const SubTitle = styled['h2'](_ => ({ font: 'var(--Body-Small-400)', color: 'var(--Gray-500)', textTransform: 'none' }));

    const Feature = styled(Box)`
        min-width: 310px;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        width: fit-content;
        gap: 1px;
        flex-wrap: nowrap;
        & > div {
            width: fit-content;
        }
    `;

    return (
        <Feature className="feature">
            <Box>
                {icon}
            </Box>
            <Content>
                <Title>{title}</Title>
                <SubTitle>{text}</SubTitle>
            </Content>
        </Feature>
    )
}

export default Feature;