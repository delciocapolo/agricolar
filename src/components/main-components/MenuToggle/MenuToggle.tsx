import styled from "@emotion/styled";
import { FC, useState } from "react";
import Box from "../TopLevelComponent/Box/Box";
import { ChevronDown, ChevronUp } from "lucide-react";

const MenuToggleContainer = styled['div']`
    position:relative;
    width:clamp(75px, 95px, 200px);
    cursor:pointer;
    border-radius:var(--border-radius);
    transition: 0.3s ease-in;
`;
const Title = styled['h1']`
    font: var(--Body-Small-500);
    color: var(--Gray-700);
    background-color: transparent;

    &::selection {
        background-color: transparent;
    }
`;
const ListItemsMenu = styled['ul']`
    content: '';
    position: absolute;
    top: 45px;
    flex-direction: column;
    align-items: flex-start;

    padding: 0.7rem;
    border-radius: var(--border-radius);
    background-color:rgba(244, 244, 244, 0.7);
    backdrop-filter: blur(14px);
    box-shadow: 0 0 1px 1px rgba(51, 51, 51, 0.1), 0 0 5px 0px rgba(51, 51, 51, 0.08);
`;

const Content = styled(Box)`
    padding: 0.5rem 1rem;
    gap: 15px;
`;

const ItemMenu = styled['li']`

`;

interface IMenuToggle {
    title: string;
    type?: 'menu' | 'select'
}


const MenuToggle: FC<IMenuToggle> = ({ title = 'Menu', type = 'select' }) => {
    // working at type menu --------- *** 8askasaskasmaskasmas
    const configs = {
        color: 'var(--Gray-700)'
    }
    const [currentState, setCurrentState] = useState<boolean>(true);

    const handleCLick = () => {
        setCurrentState(prev => !prev);
    }

    return (
        <MenuToggleContainer className="d-flex">
            <Content onClick={handleCLick}>
                <Title>{title}</Title>
                {currentState && <ChevronDown {...configs} />}
                {!currentState && <ChevronUp {...configs} />}
            </Content>
            {
                !currentState && (
                    <ListItemsMenu className="d-flex">
                        <ItemMenu>conteudo</ItemMenu>
                        <ItemMenu>conteudo</ItemMenu>
                        <ItemMenu>conteudo</ItemMenu>
                    </ListItemsMenu>
                )
            }
        </MenuToggleContainer>
    )
};

export default MenuToggle;