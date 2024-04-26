import styled from "@emotion/styled";
import { FC } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { v4 as uuid } from "uuid";
import { IMenuCustom } from "./interfaces/interfaces";

export const MenuCustom: FC<IMenuCustom> = ({ items, className }) => {
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
        justify-content: space-between;
        color: var(--Gray-900);
        // font: var(--Body-Medium-400);
    `;

    return (
        <MenuBar className={`d-flex ${className}`}>
            <List className="d-flex">
                {
                    items.map((item) => (
                        <Item className="item-menu" key={uuid()}>
                            <LinkItem href={item.url}>
                                {
                                    item.list ? (
                                        <SpanFlex className="d-flex">
                                            {item.title}
                                            <ChevronDown size={20} />
                                        </SpanFlex>

                                    ) : (
                                        item.title
                                    )
                                }
                            </LinkItem>
                            {
                                item.list && (
                                    <DropdownMenu className="dropdown-menu" key={uuid()}>
                                        <ul>
                                            {
                                                item.list.map((dropdown) => (
                                                    dropdown.list !== undefined ?
                                                        (
                                                            <li key={uuid()}>
                                                                <a href={dropdown.url}>
                                                                    <SpanFlex className="d-flex">
                                                                        {dropdown.title}
                                                                        <ChevronRight {...iconConfigs} />
                                                                    </SpanFlex>
                                                                </a>
                                                                <DropdownSubMenu className="dropdown-submenu">
                                                                    <ul>
                                                                        {
                                                                            dropdown.list.map((dropdown_submenu) => (
                                                                                <li key={uuid()}><a href={dropdown_submenu.url}>{dropdown_submenu.title}</a></li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </DropdownSubMenu>
                                                            </li>
                                                        ) :
                                                        (
                                                            <li key={uuid()}><a href={dropdown.url}>{dropdown.title}</a></li>
                                                        )
                                                ))
                                            }
                                        </ul>
                                    </DropdownMenu>
                                )
                            }
                        </Item>
                    ))
                }
            </List>
        </MenuBar>
    )
}
