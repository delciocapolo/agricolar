import styled from "@emotion/styled";
import Box from "../TopLevelComponent/Box/Box";
import SmallOne from "./InternalComponents/SmallOne";

const MenuContainer = styled(Box)`
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
        </MenuContainer>
    );
};

export default Menu;