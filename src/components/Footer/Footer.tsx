import styled from "@emotion/styled";
import Newsletter from "./InternalComponents/Newsletter";
import FooterMain from "./InternalComponents/Footer";

const Footer = () => {
    const FooterContainer = styled['footer']`
        width: 100%;
        background-color: var(--Green-50);
        border-top: 1px solid var(--Green-200)
    `;

    return (
        <FooterContainer>
            <Newsletter />
            <FooterMain />
        </FooterContainer>
    )
};

export default Footer;