import { BG } from "../../../Container/Container";
import styled from "@emotion/styled";

export const BGContainer = styled(BG)`
    z-index: 3;
    background-color: rgba(51, 51, 51, 0.5);
`;
export const ProductDetailsContainer = styled['div']`
    width: 65%;
    height: 65%;
    padding: 0.5rem;
    background-color: var(--White);
    border-radius: var(--border-radius);

    & > div {
        flex: 1 1 200px;
    }
`;

export const ProductDetailsImageContainer = styled['div']`
    height: 100%;
    gap: 0;
    justify-content: flex-start;
`;

export const SlideContainer = styled['div']`
    width: 80px;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--Green-100);
`;
export const Slide = styled['ul']`
    width: 100%;
    height: fit-content;
    max-height: 300px;
    margin: auto 0;
    
    justify-content: center;
    align-items: center;
    gap: 0;
    
    display: grid
    grid-auto-flow: row;
    gap: 15px;
    padding: 0.5rem 0;
`;

export const ItemSlide = styled['li']`
    width: 60px;
    height: 60px;
    border-radius: var(--border-radius);
    background-color: var(--White);
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        border: 1px solid var(--Success);
    }
`;
export const ImageItemSlide = styled['img']`
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: contain;
`;

export const ImageProductDetailsContainer = styled['div']`
    width: calc(100% - 80px);
    height: 100%;
    background-color: var(--White);
`;
export const ImageProductDetails = styled['img']`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

// 

export const ContainerDetails = styled['div']`

`;

// For 0 Stage
export const Frame224 = styled['div']`
    
`;

export const Frame219 = styled['div']`
    height: fit-content;
    background-color: orange;
`;
export const O_TitleStockContainer = styled['div']`
    gap: 0;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: 40px;
    background-color: red;
`;
export const O_TitleStock = styled['h1']`
    font: var(--Heading05-600);
`;

export const StockTag = styled['span']`
    padding: 4px 8px;
    background-color: rgba(132, 209, 135, 0.2);
    border-radius: var(--border-radius);
    color: var(--Success-Dark);
    font: var(--Body-Small-400);
`;

export const O_Frame220 = styled['div']`
    justify-content: space-between;
    height: calc(100% - 40px);
`;
export const O_RatingAndSku = styled['div']``;
export const O_Span220 = styled['span']`
    font: var(--Body-Small-400);
    color: var(--Gray-600);
`;
export const O_Div0 = styled['div']``;
export const O_DivSmalPoint = styled['div']`
    width: 4px;
    height: 4px;
    padding: 1px;
    border-radius: 50px;
    background-color: var(--Gray-600);
`;
export const O_SpanSku = styled['span']`
    font: var(--Body-Small-500);
    color: var(--Gray-800);
`;
export const O_BoldSku = styled['b']`
    color: var(--Gray-600);
    font: var(--Body-Small-400);
`;

export const PriceContainer = styled['div']`
    justify-content: flex-start;
`;
export const Frame218 = styled['div']``;
export const Original_Price = styled['del']`
    line-height: 1.5rem;
    color: var(--Gray-300);
    font: 1.10rem 'Poppins-regular';
`;
export const Computed_Sale = styled['span']`
    line-height: 1.5rem;
    color: var(--Success-Dark);
    font: 1.10rem 'Poppins-regular';
`;

export const SpanSale = styled['span']`
    color: var(--Error);
    font: var(--Body-Small-500);
    background-color: rgba(234, 75, 72, 0.1);
    padding: 3px 10px;
    border-radius: 50px;
`;