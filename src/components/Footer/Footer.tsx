import styled from "@emotion/styled";
import { Container as ContainerBase } from "../Container/Container";
import Newsletter from "./InternalComponents/Newsletter";
import FooterMain from "./InternalComponents/Footer";

const Footer = () => {
    const FooterContainer = styled['footer']`
        width: 100%;
        background-color: var(--Green-50);
    `;
    const Container = styled(ContainerBase)`
        margin: auto;
        // background-color: red;
    `;


    return (
        <FooterContainer>
            <Container>
                <Newsletter />
                <FooterMain />
            </Container>
        </FooterContainer>
    )
};

export default Footer;