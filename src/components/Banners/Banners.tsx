import styled from "@emotion/styled";
import cocktail from '../../assets/banners/banner2.jpg';
import { Container as DivContainer } from "../Container/Container";
import Banner from "./InternalComponents/Banner";


const Banners = () => {
    const BannersContainer = styled['div']`
        width: 100%;
        // height: 55px;
        background-color: red;
    `;
    const Container = styled(DivContainer)`
        min-height: 250px;
        margin: auto;
        padding: 0;
        background-color: yellow;
    `;


    return (
        <BannersContainer>
            <Container className="d-flex">
                <Banner image={{ path: cocktail }} />
                <Banner image={{ path: cocktail }} />
                <Banner image={{ path: cocktail }} />
            </Container>
        </BannersContainer>
    )
};

export default Banners;