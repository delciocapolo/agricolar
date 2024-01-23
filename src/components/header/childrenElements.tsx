import {FC} from 'react';
import { IItem } from "./interfaces";
import { ChevronDown, ShoppingCart } from 'lucide-react';

export const simpleLink: FC<Pick<IItem, 'link' | 'name'>> = ({link, name}) => (
    // item do menu(padrao)
    <div className="item-menu">
        <a href={link} className="link-item">{name}</a>
    </div>
);

export const buttonLink: FC<Pick<IItem, 'eventClick' | 'link' | 'name'>> = ({link, name, eventClick}) => (
    // item do menu, quando nao eh um link 
    // e realiza uma acao(exibir card ou panel)
    <ShoppingCart 
        className='item-menu g-grid'
        onClick={eventClick} 
        style={{
            color: 'var(--White)',
            cursor: 'pointer',
        }}
        size={20}
    />
);

export const buttonListLink: FC<Omit<IItem, 'type'>> = ({link, name, items, eventClick}) => (
    // item do menu, quando nao eh um link, possui uma imagem, a imagem de seta pra baixo(padrao),
    // eh um button com submenu e realiza alguma acao
    <button className="item-menu submenu d-flex" onClick={eventClick}>
        <img src={link} alt={name} className="img-item-menu"/>
        <ChevronDown />
        <nav className="submenu-list d-flex">
            {
                items?.map((subItem) => (
                    <div className="item-menu">
                        <a href={subItem.link} className="link-item">{subItem.name}</a>
                    </div>
                ))
            }
        </nav>
    </button>
);

export const subMenu: FC<Pick<IItem, 'items' | 'name'>> = ({items, name}) => (
    // submenu
    <div className="submenu">
        <span className="submenu-title">{name}</span>
        <nav className="submenu-list d-flex">
            {
                items?.map((subItem) => (
                    <div className="item-menu">
                        <a href={subItem.link} className="link-item">{subItem.name}</a>
                    </div>
                ))
            }
        </nav>
    </div>
);
