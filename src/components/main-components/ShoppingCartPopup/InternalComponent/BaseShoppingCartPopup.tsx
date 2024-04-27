import styled from "@emotion/styled";
import { BG as BaseBG } from "../../../Container/Container";

export const BG = styled(BaseBG)`
    transform: translate(100%, 0);
    opacity: 0;
    transition: 0.3s transform ease-in-out;
    background-color: transparent;

    &.actived {
        transform: translate(0, 0);
        opacity: 1;
    }
`;

export const ShoppingCartPopupContainer = styled['div']`
    width: 37.5%;
    min-width: 275px;
    max-width: 375px;
    height: 100%;
    float: right;
    gap: 0;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--White);
    padding: 0.85rem;
    box-shadow: var(--box-shadow-double-face);
`;

const FrameBase = styled['div']`
    flex: 1 1 200px;
    width: 100%;
`;

export const Frame227 = styled(FrameBase)`
    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;
`;

export const Frame229 = styled['div']`
    height: 45px;
    // background-color: red;
    justify-content: space-between;
`;

export const TextFram229 = styled['h1']`
   font: var(--Body-XL-500);
   color: var(--Gray-900);
`;
export const SubTextFrame229 = styled['span']`
    font: var(--Body-Medium-500);
    color: var(--Gray-900);
`;
export const ButtonCloseFram229 = styled['button']`
    background-color: var(--White);
    width: 45px;
    height: 100%;
`;

export const AllContainer = styled['div']`
    // background-color: purple;
    width: 100%;
    height: fit-content;
    flex-direction: column;
`;
// 

export const Fram228 = styled['div']`
    width: 100%;
    position: relative;
    
    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.09);
        top: -9px;
        backdrop-filter: blur(4px);
        /*! border-radius: 50px; */
    }
`;
export const TextFrame229Container = styled['div']`
    justify-content: space-between;
    padding: 0.7rem 0;
    margin: 0 0 7px 0;
    // background-color: yellow;
`;
export const TextDescribeFrame229 = styled['h1']`
    font: var(--Body-Small-400);
    color: var(--Gray-800);
`;
export const TextPriceFrame229 = styled(TextDescribeFrame229)`
    font: var(--Body-Small-600);
`;

export const ButtonsContainer = styled['div']`
    flex-direction: column;
`;
export const Button = styled['button']`
    padding: 0.8rem 0;
    width: 100%;
    border-radius: 50px;
    font: var(--Body-Small-600);
    background-color: var(--Success);
    color: var(--White);
`;
export const ButtonGoToCart = styled(Button)`
    background-color: rgba(0, 178, 7, 0.1);
    color: var(--Success);
`;