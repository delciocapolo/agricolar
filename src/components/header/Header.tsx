import { FC, JSX } from "react";
import {v4 as uuidv4} from "uuid";
import Menu from "./Menu";
import cart from "../../assets/cart.ico"
import { BtnActionMenu, ItemMenu, SubItemMenu } from "./ItemMenu";
import { ajuda, idioma, items } from "../../DTO/headerDTO";

const Header: FC = ():JSX.Element => {
    
    return (
        <header className="header d-flex">
            <Menu>
                <ItemMenu url="home" text="home" key={uuidv4()} />
                <ItemMenu url="farmonline" text="fazendas" key={uuidv4()} />
                <ItemMenu url="market" text="mercado" key={uuidv4()} />
                <SubItemMenu items={items} text="recursos" key={uuidv4()} />
                <SubItemMenu items={ajuda} text="ajuda" key={uuidv4()} />
                <BtnActionMenu pathImage={cart} key={uuidv4()}/>
                <div className="line-divisor"></div>
                <SubItemMenu items={idioma} text="PT" key={uuidv4()} />
                <BtnActionMenu text="criar conta" key={uuidv4()}/>
            </Menu>
        </header>
    );
};

export default Header;