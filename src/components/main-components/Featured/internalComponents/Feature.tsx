import styled from "@emotion/styled";
import Box from "../../TopLevelComponent/Box/Box";
import { Truck } from "lucide-react";

const Feature = () => {
    const size = 50;

    const Content = styled(Box)`
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        background-color: red;
    `;
    const Title = styled['h1'](_ => ({ font: 'var(--Body-Medium-600)', color: 'var(--Gray-900)' }));
    const SubTitle = styled['h2'](_ => ({ font: 'var(--Body-Small-400)', color: 'var(--Gray-500)' }));

    const Feature = styled(Box)`
        padding: 0.5rem;
        background-color: yellow;
        border-radius: var(--border-radius);
        width: 500px;
        gap: 5px;
        flex-wrap: wrap;
        & > div {
            width: fit-content;
        }
    `;

    return (
        <Feature grid className="feature">
            <Box style={{ backgroundColor: 'red' }}>
                <Truck size={size} />
            </Box>
            <Content>
                <Title>Free shipping</Title>
                <SubTitle>Free shipping on all your order</SubTitle>
            </Content>
        </Feature>
    )
}

export default Feature;