import styled from "@emotion/styled";
import Box from "../TopLevelComponent/Box/Box";
import SmallOne from "./InternalComponents/SmallOne";
import MiddleMenu from "./InternalComponents/MiddleMenu";

const MenuContainer = styled(Box)`
    gap: 0;
    width: clamp(310px, 90%, 1440px);
    flex-direction: column;
    & > * {
        width: 100%;
    }
`;

const Menu = () => {
    return (
        <MenuContainer>
            <SmallOne />
            <MiddleMenu />
        </MenuContainer>
    );
};

export default Menu;