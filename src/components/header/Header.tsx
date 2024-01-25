import {FC} from "react";
import { IHeader } from "./interfaces";
import { ChevronDown, Home, Search, ShoppingCart, User } from "lucide-react";

const Header: FC<IHeader> = ({urlBackgroundImage}) => {
    const size = 20;

    if(!urlBackgroundImage) return null;

    return (
        <header 
            className="header b-image d-grid margin-bottom-banners"
            style={{ backgroundImage: urlBackgroundImage }}
        >
            <div className="content d-grid">
                <h1 className="title-content">seu parceiro global. criando um mundo melhor</h1>
            </div>
            <menu className="menu">
                <nav className="navbar d-flex">
                    {/* c-f-im -> change first item menu */}
                    <div className="item-menu c-f-im">
                        <a className="link-menu d-flex" href="/home" target="_self" rel="noopener noreferrer">
                            <Home size={size} className="item-menu icon" style={{ backgroundColor: "transparent" }} />
                        </a>
                    </div>
                    <div className="item-menu">
                        <a className="link-menu" href="/home" target="_self" rel="noopener noreferrer">fazendas</a>
                    </div>
                    <div className="item-menu submenu d-flex">
                        <span className="spn-menu d-flex">
                            recursos
                            <ChevronDown style={{color: "var(--White"}} size={size} />
                        </span>
                        <menu className="submenu-list d-flex">
                            <li className="item-menu">
                                <a className="link-menu" href="/farm" target="_self" rel="noopener noreferrer">
                                    criar fazenda online
                                </a>
                            </li>
                            <li className="item-menu">
                                <a className="link-menu" href="/securityFarm" target="_self" rel="noopener noreferrer">
                                    obter proteção agri-ocular
                                </a>
                            </li>
                            <li className="item-menu">
                                <a className="link-menu" href="/api" target="_self" rel="noopener noreferrer">
                                    api
                                </a>
                            </li>
                        </menu>
                    </div>
                    <div className="item-menu submenu  d-flex">
                        <span className="spn-menu d-flex">
                            ajuda
                            <ChevronDown style={{color: "var(--White"}} size={size} />
                        </span>
                        <menu className="submenu-list d-flex">
                            <li className="item-menu">
                                <a className="link-menu" href="http://" target="_self" rel="noopener noreferrer">
                                    sobre nós
                                </a>
                            </li>
                            <li className="item-menu">
                                <a className="link-menu" href="http://" target="_self" rel="noopener noreferrer">
                                    entrar em contacto
                                </a>
                            </li>
                        </menu>
                    </div>
                    <div className="item-menu submenu d-flex">
                        <span className="spn-menu d-flex">
                            idioma
                            <ChevronDown style={{color: "var(--White"}} size={size} />
                        </span>
                        <menu className="submenu-list d-flex">
                            <li className="item-menu">
                                <a className="link-menu" href="" target="_self" rel="noopener noreferrer">
                                    pt
                                </a>
                            </li>
                            <li className="item-menu">
                                <a className="link-menu" href="" target="_self" rel="noopener noreferrer">
                                    us
                                </a>
                            </li>
                        </menu>
                    </div>
                    
                    <div className="line"></div>
                    
                    <button className="btn-icon-menu d-flex">
                        <Search size={size} className="icon" />
                    </button>
                    <button className="btn-icon-menu d-flex">
                        <ShoppingCart className="icon" size={size} />
                    </button>
                    <div className="item-menu submenu-hover d-flex">
                        <button className="btn-icon-menu">
                            <User size={size} className="icon" />
                        </button>
                        <menu className="submenu-list d-flex btnLogin">
                            <button type="button" className="item-menu">associar</button>
                        </menu>
                    </div>
                </nav>
            </menu>
        </header>
    );
};

export default Header;