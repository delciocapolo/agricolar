import styled from "@emotion/styled";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { MenuCustom } from "../../main-components/MenuToggle/MenuCustom";
import { IITemMenuCustom } from "../../main-components/MenuToggle/interfaces/interfaces";
import { Container as ContainerBase } from "../../Container/Container";
import { useHeaderContext } from "../../contexts/HeaderContext";
import { Link } from "react-router-dom";

const NavLink = () => {
    const Container = styled(ContainerBase)`
    min-height: 0;
    padding: 0;
    margin: auto;
    justify-content: space-between;

    & > div > .menu-toggle > .content > .title-menubar {
      font: var(--Body-Small-400);
      color: var(--Gray-50);
    }
  `;
    const CallNow = styled['div']`
    width: 100%;
    background-color: var(--Gray-50);
    // border-radius: var(--border-radius);
  `;
    const LinkCallPhone = styled(Link)`
    font: var(--Body-Small-500);
    color: var(--Gray-900);
    line-height: 2;
  `;

    const ButtonCategory = styled['button']`
    grid-template-columns: repeat(3, 1fr);
    width: 220px;
    height: 65px;
    gap: 0;

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
            url: '/'
        },
        {
            title: 'Fazendas',
            url: '/farms'
        },
        {
            title: 'Recursos',
            list: [
                {
                    title: 'API',
                    url: '/api'
                },
            ]
        },
        {
            title: 'Ajuda',
            list: [
                {
                    title: 'Sobre nós',
                    url: '/aboutus'
                },
                {
                    title: 'Entrar em contacto',
                    url: '/contact'
                }
            ]
        }
    ];

    const { setActived, actived } = useHeaderContext();

    const handleClick = () => {
        setActived(prev => !prev);
    }

    return (
        <CallNow className="d-flex">
            <Container className="d-flex">
                <div className="d-flex">
                    <ButtonCategory type="button" className="btn-category d-grid" onClick={handleClick}>
                        <Menu />
                        <span>Categorias</span>
                        <ChevronDown />
                    </ButtonCategory>
                    <MenuCustom items={IListItemMenuCustom} className="menu-custom-navlinks" />
                </div>
                <div className="d-flex">
                    <Phone size={20} style={{ color: 'var(--Gray-900)' }} />
                    <LinkCallPhone to="tel:+244993895962" className="d-flex">+244 (993) 895 962</LinkCallPhone>
                </div>
            </Container>
        </CallNow>
    );
};

export default NavLink;
