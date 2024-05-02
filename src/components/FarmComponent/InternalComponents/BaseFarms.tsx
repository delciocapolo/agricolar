import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Container as BaseContainer } from "../../Container/Container";

export const FarmsContainer = styled['section']`
    width: 100%;
    min-height: 100vh;
`;
export const Container = styled(BaseContainer)`
    padding: 0;
    margin: 0 auto;
`;
export const ContainerTitle = styled['div']`
    width: fit-content;
    margin: 2em 0 0 0;

    & > * {
        display: block;
        width: 100%;
    }
`;
export const LineContainerTitle = styled['div']`
    background-color: var(--Success);
    padding: 2px 1px;
`;
export const TitleContainer = styled['h1']`
    font: var(--Body-XXL-500);
    color: var(--Green-900);
`;

export const ListFarms = () => {
    const ContainerListFarm = styled['nav']`
        grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
        gap: 0.5rem;
        margin: 4rem 0;
        padding: 0;
        list-style-type: none;
    `;
    const ItemFarm = styled['li']``;

    // card
    const LinkFarm = styled(Link)`
        width: 295px;  
        height: 295px;  
        position: relative;
        display: block;
        border-radius: calc(var(--curve) * 1px);
        overflow: hidden;
        text-decoration: none;

        &:hover > div:first-of-type {
            transform: translateY(0);

            & > div:first-of-type {
                transform: translateY(0);
            }
        }

        box-shadow: var(--box-shadow-outline);
    `;
    const ImageFarm = styled['img']`
        width: 100%;
        height: auto;
    `;
    const CardOverlayContainer = styled['div']`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;      
        border-radius: calc(var(--curve) * 1px);    
        background-color: var(--White);      
        transform: translateY(100%);
        transition: .2s ease-in-out;
    `;
    const CardHeader = styled['div']`
        position: relative;
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 0.5em;
        border-radius: calc(var(--curve) * 1px) 0 0 0;    
        background-color: var(--White);
        transform: translateY(-100%);
        transition: .2s ease-in-out;
    `;
    const CardArc = styled['svg']`
        width: 80px;
        height: 80px;
        position: absolute;
        bottom: 100%;
        right: 0;      
        z-index: 1;

        & > path {
            fill: var(--White);
            // d: path("M 40 80 c 22 0 40 -39 40 -38 v 40 Z"); v1
            d: path("M 40 80 c 22 0 40 -14 40 -38 v 40 Z");
        }
    `;
    const CardThumb = styled['img']`
        flex-shrink: 0;
        width: 50px;
        height: 50px;      
        border-radius: 50%;
    `;
    const CardHeaderText = styled['div']``;
    const CardTitle = styled['h3']`
        font-size: 1em;
        margin: 0 0 .3em;
        color: var(--Gray-700);
        font: var(--Body-Medium-500);
    `;
    const TagLine = styled['span']`
        display: block;
        margin: 0.1em 0;
        font-family: "MockFlowFont";  
        font-size: .8em; 
        color: var(--Gray-400);
        font: var(--Body-Tiny-400);
    `;
    const CardStatus = styled['span']`
        font-size: .8em;
        color: var(--Gray-400);
        font: var(--Body-Tiny-400);
    `;
    const CardDescription = styled['p']`
        padding: 0 1.05em 1.05em;
        margin: 0;
        color: var(--Gray-400); 
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font: var(--Body-Tiny-400);
    `;

    return (
        <ContainerListFarm className="d-grid">
            {
                [1, 2, 4, 5, 6, 7, 8].map(() => (
                    <ItemFarm>
                        <LinkFarm to="/fazenda/capolo_universe">
                            <ImageFarm src="https://i.imgur.com/oYiTqum.jpg" />
                            <CardOverlayContainer>
                                <CardHeader>
                                    <CardArc xmlns="http://www.w3.org/2000/svg"><path /></CardArc>
                                    <CardThumb src="https://i.imgur.com/7D7I6dI.png" />
                                    <CardHeaderText>
                                        <CardTitle>{"Capolo Global Farm"}</CardTitle>
                                        <TagLine>{"delcio capolo"}</TagLine>
                                        <CardStatus>criada: {"02/01/2004"}</CardStatus>
                                    </CardHeaderText>
                                </CardHeader>
                                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</CardDescription>
                            </CardOverlayContainer>
                        </LinkFarm>
                    </ItemFarm>
                ))
            }
        </ContainerListFarm>
    );
};