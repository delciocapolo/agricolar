import styled from "@emotion/styled";
import Logo from "../../../../assets/Logo";
import { Heart, Search, ShoppingBasket } from "lucide-react";
import Line from "../../TopLevelComponent/Box/Line";

const MiddleMenuContainer = styled['div']`
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`;
const Form = styled['form']`
    width: 35%;
    min-width: 320px;
    gap: 0;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0px 1px rgba(51, 51, 51, 0.1);
`;
const TextField = styled['input']`
    outline: none;
    border: none;
`;

const ButtonWishList = styled['button']`
    padding: 0.3rem;
    border-radius: var(--border-radius);
    width: 45px;
    height: 45px;
    background-color: transparent;
    transition: 0.1s ease-in;

    &:hover {
        background-color: var(--Gray-50);
    }
`;
const Divider = styled(Line)`
    // width: 2px;
    height: 25px;
`;

const ShoppingCard = styled['div']`
    width: fit-content;
`;
const Cart = styled['div']`
    width: 45px;
    height: 45px;

    position: relative;

    & > * {
        position: absolute;
    }
`;

const Span = styled['span']`
    font: 0.625rem 'Poppins-medium';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -4px;
    right: -5px;
    color: var(--White);
    background-color: var(--Success-Dark);
`;

const Title = styled['h1']`
    font: 0.687rem 'Poppins-regular';
    color: var(--Gray-700);
    padding: 0.12rem 0;
`;
const TotalPrice = styled['h2']`
    font: 0.875rem 'Poppins-medium';
    padding: 0.1rem 0;
    color: var(--Gray-900);
`;
const Info = styled['div']`
    align-items: flex-start;
    gap: 0;
    flex-direction: column;
    color: 100%;
    backgroun-color: red;
`;

const MiddleMenu = () => {
    const moeda = 'AO';

    return (
        <MiddleMenuContainer className="d-flex">
            <Logo />
            <Form method="post" className="d-flex form">
                <div className="d-flex" style={{ padding: '0 0 0 0.5rem' }} >
                    <Search absoluteStrokeWidth={true} />
                </div>
                <TextField type="search" name="search_bar" placeholder="Procure por algum produto ou @fazenda" style={{
                    font: 'var(--Body-Tiny-400)',
                    flex: '1 1 200px',
                    height: '47px',
                    padding: '0.3rem',
                }} />
                <TextField type="submit" name="submit_search_bar" value="Pesquisar" style={{ padding: '0.8rem 0.5rem', cursor: 'pointer', borderRadius: '0 8px 8px 0', backgroundColor: 'var(--Success)', color: 'var(--White)', font: 'var(--Body-Small-600)' }} />
            </Form>
            <div className="d-flex">
                <ButtonWishList type="button" className="d-flex">
                    <Heart size={30} absoluteStrokeWidth={true} style={{ color: 'var(--Gray-800)' }} />
                </ButtonWishList>
                <Divider />
                <ShoppingCard className="d-flex">
                    <Cart className="d-flex">
                        <ButtonWishList type="button" className="d-flex">
                            <ShoppingBasket size={30} absoluteStrokeWidth={true} />
                        </ButtonWishList>
                        <Span className="d-flex">10</Span>
                    </Cart>
                    <Info className="d-flex">
                        <Title>shopping cart</Title>
                        <TotalPrice>{moeda} 30.000 kz</TotalPrice>
                    </Info>
                </ShoppingCard>
            </div>
        </MiddleMenuContainer>
    );
};

export default MiddleMenu;