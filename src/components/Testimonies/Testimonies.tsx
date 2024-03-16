import styled from "@emotion/styled";
import { Container as ContainerBase } from "../Container/Container";
import Card from "./InternalComponents/Card";

const Testimonies = () => {
    const TestimoniesContainer = styled['div']`
        background-color: var(--Green-50);
    `;
    const Title = styled['h1']`
        width: 100%;
        text-align: center;

        font: var(--Display03-600);
        color: var(--Green-900);
    `;
    const Container = styled(ContainerBase)`
        margin: auto;
        // background-color: red;
    `;
    const Comments = styled['div']`
        width: 100%;
        min-height: 0;
        gap: 7px;
        // background-color: yellow;

        & > * {
            flex: 1 1 242px;
        }
    `;

    return (
        <TestimoniesContainer>
            <Container>
                <Title>o que nossos clientes dizem</Title>
                <Comments className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </Comments>
            </Container>
        </TestimoniesContainer>
    )
};

export default Testimonies;