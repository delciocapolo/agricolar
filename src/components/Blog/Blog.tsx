import styled from "@emotion/styled";
import { Container as ContainerBase } from "../Container/Container";
import BlogCard from "./InternalComponents/BlogCard";

import card1 from "../../assets/blogcard/card1.jpg";
import card2 from "../../assets/blogcard/card2.jpg";
import card3 from "../../assets/blogcard/card3.jpg";

const Blog = () => {
    const BlogContainer = styled['div']`
        width: 100%;
        background-color: var(--White);

        `;
    const Container = styled(ContainerBase)`
        // min-height: 0;
        margin: auto;
        // background-color: red;

        & > * {
            display: block;
            // min-height: calc(654px / 2);
            // background-color: yellow;
        }
    `;
    const ContentBase = styled['div']`
        width: 100%;
        display: block;  
        min-height: 415px;
        // culpado
    `;
    const Content = styled(ContentBase)`
        position: relative;
        min-height: 360px;
    `;
    const Title = styled['h1']`
        font: var(--Heading05-600);
        text-align: left;
        color: var(--Green-900);
        
        // font: var(--Display03-600);
        // font-size: 2rem;
        // line-height: 1.2;
        // padding: 1.5rem 0
    `;
    const BlogCardContainer = styled['div']`
        width: 100%;
        gap: 23px;
        position: absolute;
        top: 80px;

        & > div {
            flex: 1 1 200px;
        }
    `;

    return (
        <BlogContainer>
            <Container>
                {/* Componente usado para preencher o espaco vazio, criado no componente video */}
                <ContentBase></ContentBase>
                <Content>
                    <Title>últimas  novidades</Title>
                    <BlogCardContainer className="blog-card-container d-flex">
                        <BlogCard image={{ path: card1 }} />
                        <BlogCard image={{ path: card2 }} />
                        <BlogCard image={{ path: card3 }} />
                    </BlogCardContainer>
                </Content>
            </Container>
        </BlogContainer>
    );
};

export default Blog;