import styled from "@emotion/styled";
import milk from '../../assets/banners/banner2.jpg';
import refri from '../../assets/banners/banner1.jpg';
import organico from '../../assets/banners/banner3.jpg';
import { Container as DivContainer } from "../Container/Container";
import { BannerDrink, BannerMilk, BannerOrganic } from "./InternalComponents/Banner";


const Banners = () => {
    const BannersContainer = styled['div']`
        width: 100%;
        background-color: var(--White);
        padding: 5rem 0;
    `;
    const Container = styled(DivContainer)`
        min-height: 250px;
        margin: auto;
        // background-color: yellow;
    `;


    return (
        <BannersContainer>
            <Container className="d-flex">
                <BannerMilk image={{ path: milk }} />
                <BannerDrink image={{ path: refri }} />
                <BannerOrganic image={{ path: organico }} />
            </Container>
        </BannersContainer>
    )
};

export default Banners;