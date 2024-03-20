import styled from "@emotion/styled";
import { Container as ContainerBase } from "../../Container/Container";


export const ContainerCategoryAndImage = styled(ContainerBase)`
    margin: 0 auto;
    min-height: 0;
    height: 100%;
    background-color: var(--White);

    gap: 0;
    justify-content: space-between;

    &.actived 
    > .container-menu-button-category {
        transition: 0.5s ease-in-out;
        width: 220px;
        max-width: 220px;
        height: 99.5%;
        box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.2);

        & > li {
            display: block;
            margin-bottom: 5px;

            &:last-child {
                box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.2);
            }

            & > a {
                padding: 0 1.7rem;

                & > span {
                    font: var(--Body-Small-400);
                    color: var(--Gray-900);
                    line-height: 5;
                }

                & > .icon-buttoncategory-svg {
                    color: var(--Gray-400);
                }
            }
        }
    }

    &.actived > .container-image-header {
        width: calc(100% - 230px);

        & > .container-text-image-header {
            padding: 2.5rem;
            width: 50%;
        }
    }
`;

export const ContainerImage = styled['div']`
    width: 100%;
    height: 100%;

    position: relative;
`;
export const ImageHeader = styled['img']`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
`;

export const ContainerMenuButtonCategory = styled['ul']`
    background-color: var(--White);
    width: 0;
    max-width: 0;
    height: 0;
    box-shadow: none;
`;

export const ContainerTitle = styled['div']`
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`;
export const Title = styled['h1']`
    font: var(--Display04-600);
    line-height: 1.1;
    color: var(--White);
    width: 100%;
`;
export const SubTitle = styled['h2']`
    &, & > span {
        font: 1.5rem 'Poppins-medium';
        letter-spacing: 0.3;
        line-height: 1.2;
    }

    width: 40%;
    color: rgba(255, 255, 255, 0.6);
    border-left: 2px solid var(--Success);
    padding: 0 0.7rem;

    & > span {
        color: var(--White);
    }
`;

export const ButtonShop = styled['button']`
    font: var(--Body-Medium-600);
    padding: 0.6rem 2rem;
    border-radius: 50px;
    background-color: var(--Success);


    & > * {
        color: var(--White);
        text-transform: none;
    }
`;


export const ContainerTextImageHeader = styled['div']`
    content: "";
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 2.5rem 1.5rem;
    gap: 10rem;
`;

export const ItemButtonCategory = styled['li']`
    display: initial;
    margin-bottom: 0;
`;
export const LinkButtonCategory = styled['a']`
    justify-content: flex-start;
    padding: 0;
    
    & > span {
        font-size: 0;
        color: transparent;
        line-height: 0;
    }

    & > .icon-buttoncategory-svg {
        color: transparent;
    }
`;