import styled from "@emotion/styled";
import { FC, useState } from "react";
import Box from "../TopLevelComponent/Box/Box";
import { ChevronDown, ChevronUp } from "lucide-react";
import { z } from "zod";
import { v4 as uuid } from "uuid";

const MenuToggleContainer = styled['div']`
    position:relative;
    width:clamp(75px, 95px, 200px);
    cursor:pointer;
    border-radius:var(--border-radius);
    transition: 0.3s ease-in;
    padding: 0;
`;
const Title = styled['h1']`
    font: var(--Body-Tiny-400);;
    color: var(--Gray-700);
    background-color: transparent;

    &::selection {
        background-color: transparent;
    }
`;
const ListItemsMenu = styled['ul']`
    width: clamp(95px, 100%, 1024px);
    content: '';
    position: absolute;
    top: 45px;
    flex-direction: column;
    align-items: flex-start;

    gap: 5px;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    background-color:rgba(244, 244, 244, 0.7);
    backdrop-filter: blur(14px);
    box-shadow: 0 0 1px 1px rgba(51, 51, 51, 0.1), inset 0 0 1px 0px rgba(51, 51, 51, 0.04);
`;
const Content = styled(Box)`
    padding: 0.3rem 0;
    gap: 15px;
    width: 100%;
    justify-content: space-between;
    width: clamp(75px, 85px, 200px);
`;
const ItemMenu = styled['li']`
    width: 100%;
`;
const LinkMenu = styled['a']`
    line-height: 2.5 !important;
    font: var(--Body-Tiny-400);
    color: var(--Gray-900);
    display: block;
`;

interface IItemMenu {
    url?: string;
    text?: string;
}

interface IMenuToggle {
    title: string;
    items?: IItemMenu[]
}

export const MenuToggle: FC<IMenuToggle> = ({ title = 'Menu', items }) => {
    const configs = { color: 'var(--Gray-700)' };
    const [currentState, setCurrentState] = useState<boolean>(true);

    const handleCLick = () => {
        setCurrentState(prev => !prev);
    }

    const parseUrl = z.string();
    if (items?.every(({ url }) => (typeof url !== 'undefined')) && !items?.every(({ url }) => (parseUrl.safeParse(url).success))) {
        throw new Error('Informe uma url valida!');
    }

    return (
        <MenuToggleContainer className="d-flex menu-toggle">
            <Content onClick={handleCLick} className="d-flex">
                <Title>{title}</Title>
                {currentState && <ChevronDown {...configs} />}
                {!currentState && <ChevronUp {...configs} />}
            </Content>
            {
                !currentState && (
                    <ListItemsMenu className="d-flex">
                        {
                            items!.map((item) => (
                                <ItemMenu key={uuid()}>
                                    <LinkMenu href={item.url} key={uuid()}>{item.text}</LinkMenu>
                                </ItemMenu>
                            ))
                        }
                    </ListItemsMenu>
                )
            }
        </MenuToggleContainer>
    )
};