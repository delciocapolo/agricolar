import styled from "@emotion/styled";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { MenuCustom } from "../../main-components/MenuToggle/MenuCustom";
import { IITemMenuCustom } from "../../main-components/MenuToggle/interfaces/interfaces";
import { useContext } from "react";
import { PaddingContext } from "../../contexts/padding";

const NavLink = () => {
    const { padding } = useContext(PaddingContext);

    const CallNow = styled['div']`
    width: 100%;
    padding: ${padding};
    justify-content: space-between;
    background-color: var(--Gray-50);
    // border-radius: var(--border-radius);

    & > div > .menu-toggle > .content > .title-menubar {
        font: var(--Body-Small-400);
        color: var(--Gray-50);
    }
`;
    const LinkCallPhone = styled['a']`
    font: var(--Body-Small-500);
    color: var(--Gray-900);
    line-height: 2;
`;

    const ButtonCategory = styled['button']`
        grid-template-columns: repeat(3, 1fr);
        height: 65px;
        gap: 0;
        width: 205px;
        // border-radius: var(--border-radius) 0 0 var(--border-radius);

        & > * {
            color: var(--White);
        }

        & > span {
            font: var(--Body-Small-500);
        }

        background-color: var(--Success);
    `;

    const IListItemMenuCustom: IITemMenuCustom[] = [
        {
            title: 'Home',
            url: 'http://localhost:5173/'
        },
        {
            title: 'Fazendas',
            url: 'http://localhost:5173/farms'
        },
        {
            title: 'Recursos',
            list: [
                {
                    title: 'Fazendas',
                    list: [
                        {
                            title: 'criar fazenda online',
                            url: 'http://localhost:5173/farm/createfarm'
                        },
                        {
                            title: 'associar minha fazenda',
                            url: 'http://localhost:5173/farm/connectionfarm'
                        }
                    ]
                },
                {
                    title: 'Obter proteção agri-ocular',
                    url: 'http://localhost:5173/farm/protection'
                },
                {
                    title: 'API',
                    url: 'http://localhost:5173/api'
                }
            ]
        },
        {
            title: 'Ajuda',
            list: [
                {
                    title: 'Sobre nós',
                    url: 'http://localhost:5173/aboutus'
                },
                {
                    title: 'Entrar em contacto',
                    url: 'http://localhost:5173/#'
                }
            ]
        }
    ];

    return (
        <CallNow className="d-flex">
            <div className="d-flex">
                <ButtonCategory type="button" className="btn-category d-grid">
                    <Menu />
                    <span>Categorias</span>
                    <ChevronDown />
                </ButtonCategory>
                <MenuCustom items={IListItemMenuCustom} className="menu-custom-navlinks" />
            </div>
            <div className="d-flex">
                <Phone size={20} style={{ color: 'var(--Gray-900)' }} />
                <LinkCallPhone href="tel:+244993895962" className="d-flex">+244 (993) 895 962</LinkCallPhone>
            </div>
        </CallNow>
    );
};

export default NavLink;