import styled from "@emotion/styled";
import { FC, useState } from "react";
import Box from "../TopLevelComponent/Box/Box";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
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
    height: fit-content;
    content: '';
    position: absolute;
    top: 45px;
    flex-direction: column;
    align-items: flex-start;

    gap: 5px;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    background-color:rgba(244, 244, 244, 0.3);
    backdrop-filter: blur(12px);
    box-shadow: 0 0 1px 1px rgba(51, 51, 51, 0.1), inset 0 0 1px 0px rgba(51, 51, 51, 0.04);
`;
const Content = styled(Box)`
    width: fit-content;
    padding: 0.3rem 0;
    gap: 15px;

    justify-content: space-between;
    flex-wrap: nowrap;
`;
const ItemMenu = styled['li']`
    position: realtive;
    width: 100%;

    &:hover > .submenu-menu-toggle {
        display: flex !important;
    }
`;
const LinkMenu = styled['a']`
    line-height: 2.5 !important;
    font: var(--Body-Tiny-400);
    color: var(--Gray-900);
    display: block;
`;

export interface IItemMenu {
    type?: 'link' | 'submenu';
    subitems?: Omit<IItemMenu, 'subitems'>[];
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

    const thereAreSubmenu = items?.some((item) => item.type === 'submenu') ? { width: 'clamp(95px, calc(100% + 50px), 1024px)' } : undefined;

    return (
        <MenuToggleContainer className="d-flex menu-toggle">
            <Content onClick={handleCLick} className="content d-flex">
                <Title className="title-menubar">{title}</Title>
                {currentState && <ChevronDown {...configs} />}
                {!currentState && <ChevronUp {...configs} />}
            </Content>
            {
                !currentState && (
                    <ListItemsMenu className="d-flex list-items-menu" style={{ ...thereAreSubmenu }}>
                        {
                            items!.map((item) => {
                                return (
                                    <ItemMenu className="item-menu" key={uuid()}>
                                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                            <LinkMenu className="link-menu" href={item.url} key={uuid()}>{item.text}</LinkMenu>
                                            {(item.type === 'submenu') && <ChevronRight size={15} />}
                                        </div>
                                        {(item.type === 'submenu') &&
                                            (
                                                <ListItemsMenu className="list-items-menu d-flex d-none submenu-menu-toggle">
                                                    {
                                                        item.subitems?.map((subitem) => (
                                                            <ItemMenu className="item-menu" key={uuid()}>
                                                                <LinkMenu className="link-menu" href={subitem.url} key={uuid()}>{subitem.text}</LinkMenu>
                                                            </ItemMenu>
                                                        ))
                                                    }
                                                </ListItemsMenu>
                                            )
                                        }
                                    </ItemMenu>
                                )
                            })
                        }
                    </ListItemsMenu>
                )
            }
        </MenuToggleContainer>
    )
};

export const MultiMenu = () => {
    const MenuBar = styled['div']`
        // background-color: #333;
        width: fit-content;
        // min-width: 65px;
        // min-height: 35px;
    `;
    const List = styled['ul']`
        list-style: none;
    `;
    const Item = styled['li']`
        // padding: 10px 30px;
        position: relative;

        & > a {
            padding: 0 0.3rem;
            display: block;
            line-height: 3;
            color: #333;
            text-decoration: none;
        }

        &:hover > .dropdown-menu {
            display: block;
        }

        &:hover > .dropdown-menu > ul > li {
            width: 150px;
            padding: 0 0.5rem;
        }
        &:hover > .dropdown-menu > ul > li > a {
            display: block;
            line-height: 3;
            padding: 0.1rem;
        }
    `;

    const LinkItem = styled['a']`
        font: var(--Body-Medium-400);
    `;

    const DropdownMenu = styled['div']`
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        border-radius: 3px;
        box-shadow: var(--box-shadow-double-face);

        & > ul {
            display: block;
        }
        
        & > ul > li > a {
            color: var(--Gray-900);
            font: var(--Body-Medium-400);
        }

        & > ul > li:hover > .dropdown-submenu {
            display: block;
        }
    `;

    const DropdownSubMenu = styled['div']`
        display: none;
        height: 100%;
        position: absolute;
        
        // bottom: 0;
        top: 0;
        left: 100%;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;

        & > ul {
            // height: 100%;
            min-width: 165px;
            padding: 0.2rem;
        }

        & > ul > li > a {
            width: 100%;
            color: var(--Gray-900);
            display: block;
            line-height: 3;
            font-size: 1rem;
            padding: 0 0.5rem;
        }
    `;

    const iconConfigs = {
        size: 20
    };
    const SpanFlex = styled['span']`
        justify-content: flex-start;
        color: var(--Gray-900);
    `;

    return (
        <MenuBar className="d-flex">
            <List className="d-flex">
                <Item className="item-menu">
                    <LinkItem href="#">Home</LinkItem>
                    <DropdownMenu className="dropdown-menu">
                        <ul>
                            <li><a href="#">Primeiro</a></li>
                            <li><a href="#">Primeiro</a></li>
                            <li>
                                <a>
                                    <SpanFlex className="d-flex">
                                        Primeiro
                                        <ChevronRight {...iconConfigs} />
                                    </SpanFlex>
                                </a>
                                <DropdownSubMenu className="dropdown-submenu">
                                    <ul>
                                        <li><a href="#">Items</a></li>
                                        <li><a href="#">Items</a></li>
                                        <li><a href="#">Items</a></li>
                                        <li><a href="#">Items</a></li>
                                    </ul>
                                </DropdownSubMenu>
                            </li>
                            <li>
                                <a>Over</a>
                                <DropdownSubMenu className="dropdown-submenu">
                                    <ul>
                                        <li><a href="#">items problems</a></li>
                                        <li><a href="#">items problems</a></li>
                                        <li><a href="#">items problems</a></li>
                                        <li><a href="#">items problems</a></li>
                                    </ul>
                                </DropdownSubMenu>
                            </li>
                            <li>
                                <a>Summer</a>
                                <DropdownSubMenu className="dropdown-submenu">
                                    <ul>
                                        <li><a href="#">sale</a></li>
                                        <li><a href="#">sale</a></li>
                                        <li><a href="#">sale</a></li>
                                        <li><a href="#">sale</a></li>
                                    </ul>
                                </DropdownSubMenu>
                            </li>
                        </ul>
                    </DropdownMenu>
                </Item>
            </List>
        </MenuBar>
    )
}
