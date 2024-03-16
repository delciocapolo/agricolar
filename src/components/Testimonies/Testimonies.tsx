import styled from "@emotion/styled";
import { Container as ContainerBase } from "../Container/Container";
import Card from "./InternalComponents/Card";
import Video from "./InternalComponents/Video";

export const minHeightBase = '650px';
const Testimonies = () => {
    const TestimonieContainer = styled['div']`
        width: 100%;
        background-color: var(--Green-50);
        padding: 4.5rem 0;
        min-height: ${minHeightBase};
        
        & > div {
            display: block;
            min-height: calc(${minHeightBase} / 2);
        }
    `;
    const Container = styled(ContainerBase)`
        // background-color: yellow;
        margin: auto;
        padding: 0;
    `;
    const ContainerRelative = styled(ContainerBase)`
        position: relative;
        margin: auto;
        // background-color: purple;
        padding: 0;
    `;
    const Title = styled['h1']`
        font: var(--Heading05-600);
        color: var(--Green-900);
        // background-color: red;
        text-align: center;
        padding: 1.7rem 0;
    `;
    const CommentContainer = styled['div']`
        width: 100%;
        pading: 0;
        // background-color: brown;
        
        & > div {
            flex: 1 1 303px;
        }
    `;

    return (
        <TestimonieContainer>
            <Container>
                <Title>o que nosso clientes dizem</Title>
                <CommentContainer className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </CommentContainer>
            </Container>
            <ContainerRelative>
                <Video />
            </ContainerRelative>
        </TestimonieContainer>
    )
};

export default Testimonies;
