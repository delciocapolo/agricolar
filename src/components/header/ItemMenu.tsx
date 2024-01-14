import { JSX, FC} from "react";
import {v4 as uuidv4} from "uuid";

export interface IItemMenu {
    url?: string;
    text?: string;
    children?: JSX.Element;
}

interface ISubMenuItem {
    items: IItemMenu[];
    text?: string;
}

interface IBtnActionMenu {
    pathImage?: string;
    text?: string | undefined;
}


export const ItemMenu: FC<IItemMenu> = ({url, text, children}):JSX.Element => {
    return (
        <li className="item-menu">
            {
                url == undefined ? 
                    ( <span className="item-menu-link">{text}</span> ) 
                    : ( <a href={`http://localhost:5173/${url}`} target="_self" className="item-menu-link">
                            { text }
                        </a> )                        
            }
            {
                children
            }
        </li>
    )
};

export const SubItemMenu: FC<ISubMenuItem> = ({items, text}):JSX.Element => {
    return (
        <ItemMenu text={text}>
            <ul className="sub-item-menu d-grid">
                {
                    items.map(({url, text}) => <ItemMenu text={text} url={url} key={uuidv4()}/>)
                }
            </ul>
        </ItemMenu>
    );
};


export const BtnActionMenu: FC<IBtnActionMenu> = ({pathImage, text}):JSX.Element => {
    const BtnAction: FC<IBtnActionMenu> = ({pathImage, text}):JSX.Element => {
        if(!text && pathImage) {
            return (
                <button type="button" className="btn-action-menu">
                    <img src={pathImage} alt="Uma imagem" className="img-btn-action-menu" />
                </button>
            );
        }
        
        if (text && !pathImage) {
            return (
                <button type="button" className="btn-action-menu">
                    <span>{text}</span>
                </button>
            );
        }
        
        return (
            <button type="button" className="btn-action-menu">
                <span>{text}</span>
                <img src={pathImage} alt="Uma imagem" className="img-btn-action-menu" />
            </button>
        );
        
    };
    
    return <BtnAction text={text} pathImage={pathImage} key={uuidv4()} />;
};
