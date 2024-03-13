import styled from "@emotion/styled";
import Box from "../../main-components/TopLevelComponent/Box/Box";
import { MapPin } from "lucide-react";
// import CustomizedMenus from "./Internal_Components_SmallOne/InternalComponentsSmallOne";
// import SelectOptions from "./Internal_Components_SmallOne/SelectOptions";
import Line from "../../main-components/TopLevelComponent/Box/Line";
import { SelectCustom } from "../../main-components/MenuToggle/SelectCustom";

const SmallOneContainer = styled(Box)`
    background-color: var(--Success);
    justify-content: space-between;
    // border-radius: var(--border-radius);
    width: 100%;
    border-bottom: 0.5px solid rgba(51, 51, 51, 0.05)
`;
const ContactContainer = styled(Box)`
    gap: 5px;
    justify-content: flex-start;
`;
const TitleContact = styled['h1']`
    font: var(--Body-Tiny-400);
    color: var(--White);
`;

const LineContainer = styled(Line)({
    height: '18px',
    width: '1.2px',
    padding: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
});

const LinksContainer = styled(Box)({
    gap: '10px',
    justifyContent: 'flex-end'
});

const ButtonSignUpIn = styled['button']`
    text-align: right;
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
                <MapPin style={{ color: 'var(--White)' }} />
                <TitleContact>Store Location: Lincoln - 344, Illinois, Chicago, USA</TitleContact>
            </ContactContainer>
            <LinksContainer className="links-container">
                <SelectCustom title="Idioma" items={[{ text: 'PT', url: 'http://localhost:5173/pt' }, { text: 'EN', url: 'http://localhost:5173/en' }]} />
                <SelectCustom title="Moeda" items={[{ text: 'USD' }, { text: 'AO' }]} />
                <LineContainer />
                <ButtonSignUpIn>entrar / criar conta</ButtonSignUpIn>
            </LinksContainer>
        </SmallOneContainer>
    )
};

export default SmallOne;