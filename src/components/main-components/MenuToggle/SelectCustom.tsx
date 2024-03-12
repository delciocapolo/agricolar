import styled from "@emotion/styled";
import { FC, useState } from "react";
import Box from "../TopLevelComponent/Box/Box";
import { ChevronDown, ChevronUp } from "lucide-react";
import { z } from "zod";
import { v4 as uuid } from "uuid";
import { ISelectCustom } from "./interfaces/interfaces";

const SelectCustomContainer = styled['div']`
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

export const SelectCustom: FC<ISelectCustom> = ({ title = 'Menu', items }) => {
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
        <SelectCustomContainer className="d-flex menu-toggle">
            <Content onClick={handleCLick} className="content d-flex">
                <Title className="title-menubar">{title}</Title>
                {currentState && <ChevronDown {...configs} />}
                {!currentState && <ChevronUp {...configs} />}
            </Content>
            {
                !currentState && (
                    <ListItemsMenu className="d-flex list-items-menu">
                        {
                            items!.map((item) => {
                                return (
                                    <ItemMenu className="item-menu" key={uuid()}>
                                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                            <LinkMenu className="link-menu" href={item.url} key={uuid()}>{item.text}</LinkMenu>
                                        </div>
                                    </ItemMenu>
                                )
                            })
                        }
                    </ListItemsMenu>
                )
            }
        </SelectCustomContainer>
    )
};