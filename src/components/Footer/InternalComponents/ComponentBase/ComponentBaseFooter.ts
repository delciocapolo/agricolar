import styled from "@emotion/styled";
import { Container as ContainerCentralized } from "../../../Container/Container";

const minHeight = '125px';

export const FooterMainContainer = styled['div']`
        background-color: var(--Green-900);
    `;
export const Container = styled(ContainerCentralized)`
        min-height: ${minHeight};
        margin: auto;
        padding: 75px 0;
        gap: 5px;
        justify-content: space-between;
        align-items: flex-start;
        // background-color: yellow;
    `;
export const ContainerBase = styled['div']`
        // min-height: ${minHeight};
        min-width: 120px;
        // background-color: red;
    `;
export const GroupList = styled['nav']`
        &.d-flex.about {
            flex-direction: column;
            max-width: 385px;
            align-items: flex-start;
            gap: 12px;
        }
    `;
export const TitleTopList = styled['h1']`
        font: var(--Body-XL-500);
        color: var(--White);
    `;
export const List = styled['ul']``;
export const ItemList = styled['li']`
        display: block;
    `;
export const LinkItem = styled['a']`
        display: block;
        font: var(--Body-Small-400);
        color: var(--Green-400);
        line-height: 2.7;
        transition: 0.15s ease-in;

        &:hover {
            color: var(--White);
        }
    `;
export const TextAbout = styled['p']`
        font: var(--Body-Small-400);    
        text-align: justify;
        color: var(--Green-500);
    `;
export const ContactContainer = styled['div']`
        gap: 15px;
        // background-color: gray;

        & > span {
            text-transform: none;
            font: var(--Body-Medium-400);
            color: var(--Green-500);
        }
    `;
export const SubContactContainer = styled['div']`
        gap: 5px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        // background-color: green;

        & > div {
            width: 100%;
            height: 2px;
            background-color: var(--Success);
        }
    `;

export const LinkContact = styled['a']`
        font: var(--Body-Small-500);
        color: var(--White);
        line-height: 2;
        // display: block;
        text-transform: none;
    `;
export const Image = styled['img']`
        border-radius: var(--border-radius);
        object-fit: contain;
    `;
export const ListNew = styled(List)`
        & > li { 
            flex: 1 1 50px;
        }
    `;

export const ContainerCopyright = styled(Container)`
        min-height: 75px;
        padding: 0;
        border: 2px solid var(--)
        background-color: red;
        padding: 0;

        align-items: center;
        justify-content: center;

        border-top: 1px solid rgba(255, 255, 255, 0.2);
    `;
export const ContainerBaseCopyright = styled['div']`
        flex: 1 1 100px;

        &.left {
            justify-content: flex-start;
        }
        &.right {
            justify-content: flex-end;
        }
    `;
export const CircleSocialMediaContainer = styled['a']`
        width: 45px;
        height: 45px;
        border-radius: 50px;
        transition: 0.15s ease-in;
        
        &:hover {
            background-color: var(--Success);
        }
        &:hover > .icon-copyright-svg {
            color: var(--White);
        }
        & > .icon-copyright-svg {
            color: var(--Green-300);
        }
        
        & > .icon-copyright-svg.facebook-icon,
        & > .icon-copyright-svg.twitter-icon {
            fill: var(--Green-300);
            stroke: none;
        }
    `;
export const TextCopyright = styled['span']`
        font: var(--Body-Small-400);
        color: var(--Green-500);
    `;
export const ButtonPaymentMethod = styled['button']`
        border: 1px solid var(--White);
        background-color: transparent;

        padding: 3px 20px;
        border-radius: var(--border-radius);

        & > .icon-paymentmethod-svg {
            color: var(--White);
        }
    `;