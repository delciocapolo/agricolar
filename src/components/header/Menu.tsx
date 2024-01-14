import {JSX, FC} from "react";

interface IMenu {
    children: JSX.Element[];
}

const Menu:FC<IMenu> = ({children}):JSX.Element => {
    return (
        <ul className="menu d-flex">
            {
                children.map(child => child)
            }
        </ul>
    );
};

export default Menu;