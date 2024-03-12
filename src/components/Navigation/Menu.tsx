import styled from "@emotion/styled";
import SmallOne from "./InternalComponents/SmallOne";
import MiddleMenu from "./InternalComponents/MiddleMenu";
import NavLink from "./InternalComponents/NavLinks";
import Box from "../main-components/TopLevelComponent/Box/Box";

const MenuContainer = styled(Box)`
    width: 100%;
    padding: 0;
    // width: clamp(310px, 90%, 1440px);
    background-color: rgba(244, 244, 244, 0.1);
    
    gap: 0;
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
            <NavLink />
        </MenuContainer>
    );
};

export default Menu;