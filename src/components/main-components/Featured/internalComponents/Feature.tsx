import styled from "@emotion/styled";
import { FC } from "react";
import { minHeightFeaturedContainer } from "../DTO/minHeightFeaturedContainer";

interface IFeature {
    icon: JSX.Element;
    title: string;
    text?: string;
    index?: number | string;
}

const Title = styled['h1'](_ => ({ font: 'var(--Body-Medium-600)', color: 'var(--Gray-900)', textTransform: 'none' }));
const SubTitle = styled['h2'](_ => ({ font: 'var(--Body-Small-400)', color: 'var(--Gray-500)', textTransform: 'none' }));

const Content = styled['div']`
    width: calc(100% - 35px);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    // background-color: green;
`;
const FeaturedContainer = styled['div']`
    min-height: ${minHeightFeaturedContainer};
    flex-wrap: nowrap;
    flex: 1 1 200px;
    justify-content: space-between;
    
    &:nth-of-type(1),
    &[data-index="2"] {
        border-right: 1px solid rgba(26, 26, 26, 0.2);
    }

    &[data-index="1"] {
        padding: 0 0 0 7px;
    }
`;

const ContainerIcon = styled['div']`
    min-height: 100%;
`;
const IconSubContainer = styled['div']`
    padding: 0;
    width: auto;
    margin: 0;
    gap: 0;
`;

const Feature: FC<IFeature> = ({ icon, text, title, index }) => {
    return (
        <FeaturedContainer className="feature d-flex" data-index={index}>
            <ContainerIcon>
                <IconSubContainer className="icon-subcontainer d-flex">
                    {icon}
                </IconSubContainer>
            </ContainerIcon>
            <Content className="d-flex">
                <Title>{title}</Title>
                <SubTitle>{text}</SubTitle>
            </Content>
        </FeaturedContainer>
    )
}

export default Feature;