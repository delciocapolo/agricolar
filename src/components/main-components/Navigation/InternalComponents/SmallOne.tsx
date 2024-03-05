import styled from "@emotion/styled";
import Box from "../../TopLevelComponent/Box/Box";
import { MapPin } from "lucide-react";
// import CustomizedMenus from "./Internal_Components_SmallOne/InternalComponentsSmallOne";
import SelectOptions from "./Internal_Components_SmallOne/SelectOptions";
import Line from "../../TopLevelComponent/Box/Line";

const SmallOneContainer = styled(Box)`
    justify-content: space-between;
`;
const ContactContainer = styled(Box)`
    gap: 5px;
`;
const TitleContact = styled['h1']`
    font: var(--Body-Tiny-400);
    color: var(--Gray-600);
`;

const SmallOne = () => {
    return (
        <SmallOneContainer>
            <ContactContainer>
                <MapPin style={{ color: 'var(--Gray-600)' }} />
                <TitleContact>Store Location: Lincoln - 344, Illinois, Chicago, USA</TitleContact>
            </ContactContainer>
            <Box>
                <SelectOptions langs={['PT', 'EN', 'FR']} />
                <Line />
                <SelectOptions langs={['PT', 'EN', 'FR']} />
            </Box>
        </SmallOneContainer>
    )
};

export default SmallOne;