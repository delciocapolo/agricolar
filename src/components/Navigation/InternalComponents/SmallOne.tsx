import styled from "@emotion/styled";
import { MapPin } from "lucide-react";
// import CustomizedMenus from "./Internal_Components_SmallOne/InternalComponentsSmallOne";
// import SelectOptions from "./Internal_Components_SmallOne/SelectOptions";
import Line from "../../main-components/TopLevelComponent/Box/Line";
import { SelectCustom } from "../../main-components/MenuToggle/SelectCustom";
import { useContext } from "react";
import { PaddingContext } from "../../contexts/padding";
import { Container as ContainerBase } from "../../Container/Container";

const SmallOne = () => {
    const { padding } = useContext(PaddingContext);
    const prevPadding = String(padding).split(' ')[1];

    const Container = styled(ContainerBase)`
        min-height: 0;
        justify-content: space-between;
        padding: 0.3rem 0;
        margin: auto;
        // background-color: red;
        
        & > * {
            width: fit-content;
        }
    `;

    const SmallOneContainer = styled['div']`
        width: 100%;
        padding: 0;
        background-color: var(--Success);
        // border-radius: var(--border-radius);
        border-bottom: 0.5px solid rgba(51, 51, 51, 0.05)
`;
    const ContactContainer = styled['div']`
        gap: 5px;
        justify-content: flex-start;
        padding: 0;
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

    const LinksContainer = styled['div']({
        gap: '10px',
        justifyContent: 'flex-end',
        padding: 0
    });

    const ButtonSignUpIn = styled['button']`
    text-align: right;
    text-transform: capitalize;
    font: var(--Body-Tiny-400);
    color: var(--Gray-600);
    height: fit-content;
    padding: 0.4rem 0 0.4rem 0.7rem;
    background-color: transparent;
`;

    return (
        <SmallOneContainer>
            <Container className="d-flex">
                <ContactContainer className="d-flex">
                    <MapPin style={{ color: 'var(--White)' }} />
                    <TitleContact>Store Location: Lincoln - 344, Illinois, Chicago, USA</TitleContact>
                </ContactContainer>
                <LinksContainer className="links-container d-flex">
                    <SelectCustom title="Idioma" items={[{ text: 'PT', url: 'http://localhost:5173/pt' }, { text: 'EN', url: 'http://localhost:5173/en' }]} />
                    <SelectCustom title="Moeda" items={[{ text: 'USD' }, { text: 'AO' }]} />
                    <LineContainer />
                    <ButtonSignUpIn>entrar / criar conta</ButtonSignUpIn>
                </LinksContainer>
            </Container>
        </SmallOneContainer>
    )
};

export default SmallOne;