import styled from "@emotion/styled";
import { IItemMenu, MenuToggle } from "../../MenuToggle/MenuToggle";
import { Phone } from "lucide-react";

const CallNow = styled['div']`
    width: 100%;
    padding: 0.8rem 0.5rem;
    justify-content: space-between;
    background-color: var(--Gray-800);
    border-radius: var(--border-radius);

    & > div > .menu-toggle > .content > .title-menubar {
        font: var(--Body-Small-400);
        color: var(--Gray-50);
    }
`;
const LinkCallPhone = styled['a']`
    font: var(--Body-Small-500);
    color: var(--White);
    line-height: 2;
`;

const NavLink = () => {

    const AjudaItems: IItemMenu[] = [
        {
            type: 'submenu',
            text: 'Ajuda',
            subitems: [
                {
                    type: 'link',
                    text: 'Sobre nós',
                    url: 'https://agricolar.com/fazendas'
                },
                {
                    type: 'link',
                    text: 'Entrar em contacto',
                    url: 'https://agricolar.com/s'
                },
            ]
        },
    ];
    const RecursosItems: IItemMenu[] = [
        {
            type: 'submenu',
            text: 'Recursos',
            subitems: [
                {
                    type: 'link',
                    text: 'Criar fazenda online',
                    url: 'https://agricolar.com/fazendas'
                },
                {
                    type: 'link',
                    text: 'Obter proteção',
                    url: 'https://agricolar.com/s'
                },
                {
                    type: 'link',
                    text: 'API',
                    url: 'https://agricolar.com/vf'
                },
            ]
        },
    ];
    const FazendasItems: IItemMenu[] = [
        {
            type: 'submenu',
            text: 'Fazendas',
            subitems: [
                {
                    type: 'link',
                    text: 'Bovinas',
                    url: 'https://agricolar.com/fazendas'
                },
                {
                    type: 'link',
                    text: 'Veganas',
                    url: 'https://agricolar.com/s'
                },
            ]
        },
        {
            type: 'submenu',
            text: 'Fazendas',
            subitems: [
                {
                    type: 'link',
                    text: 'Bovinas',
                    url: 'https://agricolar.com/fazendas'
                },
                {
                    type: 'link',
                    text: 'Veganas',
                    url: 'https://agricolar.com/s'
                },
            ]
        },
    ];
    const HomeItems: IItemMenu[] = [
        {
            type: 'submenu',
            text: 'Home',
            subitems: [
                {
                    type: 'link',
                    text: 'Home',
                    url: 'https://agricolar.com/'
                }
            ]
        }
    ];

    return (
        <CallNow className="d-flex">
            <div className="d-flex">
                <MenuToggle title="Home" items={HomeItems} />
                <MenuToggle title="Fazendas" items={FazendasItems} />
                <MenuToggle title="Recursos" items={RecursosItems} />
                <MenuToggle title="Ajuda" items={AjudaItems} />
            </div>
            <div className="d-flex">
                <Phone size={20} style={{ color: 'var(--White)' }} />
                <LinkCallPhone href="tel:+244993895962" className="d-flex">+244 993895962</LinkCallPhone>
            </div>
        </CallNow>
    );
};

export default NavLink;