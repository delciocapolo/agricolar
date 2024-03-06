import styled from "@emotion/styled";
import Box from "../../TopLevelComponent/Box/Box";
import { MapPin } from "lucide-react";
// import CustomizedMenus from "./Internal_Components_SmallOne/InternalComponentsSmallOne";
// import SelectOptions from "./Internal_Components_SmallOne/SelectOptions";
import Line from "../../TopLevelComponent/Box/Line";
import { MenuToggle } from "../../MenuToggle/MenuToggle";

const SmallOneContainer = styled(Box)`
    justify-content: space-between;
    width: 100%;
`;
const ContactContainer = styled(Box)`
    gap: 5px;
    justify-content: flex-start;
`;
const TitleContact = styled['h1']`
    font: var(--Body-Tiny-400);
    color: var(--Gray-600);
`;

const LineContainer = styled(Line)({
    height: '25px'
});

const LinksContainer = styled(Box)({
    gap: '10px',
    justifyContent: 'flex-end'
});

const ButtonSignUpIn = styled['button']`
    text-transform: capitalize;
    font: var(--Body-Tiny-400);
    color: var(--Gray-600);
    height: fit-content;
    padding: 0.4rem 0.7rem;
    background-color: transparent;
`;

const SmallOne = () => {
    return (
        <SmallOneContainer>
            <ContactContainer>
                <MapPin style={{ color: 'var(--Gray-600)' }} />
                <TitleContact>Store Location: Lincoln - 344, Illinois, Chicago, USA</TitleContact>
            </ContactContainer>
            <LinksContainer>
                <MenuToggle title="Idioma" items={[{ text: 'PT', url: 'http://localhost:5173/pt' }, { text: 'EN', url: 'http://localhost:5173/en' }]} />
                <MenuToggle title="Moeda" items={[{ text: 'USD' }, { text: 'AO' }]} />
                <LineContainer />
                <ButtonSignUpIn>entrar / criar conta</ButtonSignUpIn>
            </LinksContainer>
        </SmallOneContainer>
    )
};

export default SmallOne;