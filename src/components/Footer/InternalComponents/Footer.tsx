import styled from "@emotion/styled";
import { Container as ContainerCentralized } from "../../Container/Container";
import { v4 as uuid } from "uuid";

// 
import i1 from "../../../assets/instagram/i1.jpg";
import i2 from "../../../assets/instagram/i2.jpg";
import i3 from "../../../assets/instagram/i3.jpg";
import i4 from "../../../assets/instagram/i4.jpg";
import i5 from "../../../assets/instagram/i5.jpg";
import i6 from "../../../assets/instagram/i6.jpg";
import i7 from "../../../assets/instagram/i7.jpg";
import i8 from "../../../assets/instagram/i8.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa6";
import { BiLogoMastercard } from "react-icons/bi";

const FooterMain = () => {
    const minHeight = '125px';
    const FooterMainContainer = styled['div']`
        background-color: var(--Green-900);
    `;
    const Container = styled(ContainerCentralized)`
        min-height: ${minHeight};
        margin: auto;
        padding: 75px 0;
        gap: 5px;
        justify-content: space-between;
        align-items: flex-start;
        // background-color: yellow;
    `;
    const ContainerBase = styled['div']`
        // min-height: ${minHeight};
        min-width: 120px;
        // background-color: red;
    `;
    const GroupList = styled['nav']`
        &.d-flex.about {
            flex-direction: column;
            max-width: 385px;
            align-items: flex-start;
            gap: 12px;
        }
    `;
    const TitleTopList = styled['h1']`
        font: var(--Body-XL-500);
        color: var(--White);
    `;
    const List = styled['ul']``;
    const ItemList = styled['li']`
        &, 
        & > a {
            display: block;
        }
    `;
    const LinkItem = styled['a']`
        font: var(--Body-Small-400);
        color: var(--Green-400);
        line-height: 2.7;
        transition: 0.15s ease-in;

        &:hover {
            color: var(--White);
        }
    `;
    const TextAbout = styled['p']`
        font: var(--Body-Small-400);    
        text-align: justify;
        color: var(--Green-500);
    `;
    const ContactContainer = styled['div']`
        gap: 15px;
        // background-color: gray;

        & > span {
            text-transform: none;
            font: var(--Body-Medium-400);
            color: var(--Green-500);
        }
    `;
    const SubContactContainer = styled['div']`
        gap: 5px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        // background-color: green;

        & > div {
            width: 100%;
            height: 2px;
            background-color: var(--Success);
        }
    `;

    const LinkContact = styled['a']`
        font: var(--Body-Small-500);
        color: var(--White);
        line-height: 2;
        // display: block;
        text-transform: none;
    `;
    const Image = styled['img']`
        border-radius: var(--border-radius);
        object-fit: contain;
    `;
    const ListNew = styled(List)`
        & > li { 
            flex: 1 1 50px;
        }
    `;

    interface IItemGroupList {
        title: string;
        links: {
            url: string;
            description: string;
        }[]
    }

    const LIST: IItemGroupList[] = [
        {
            title: 'Minha conta',
            links: [
                {
                    url: '/myaccount',
                    description: 'minha conta'
                },
                {
                    url: '/myaccount',
                    description: 'histórico de encomendas'
                },
                {
                    url: '/myaccount',
                    description: 'lista de desejos'
                },
                {
                    url: '/myaccount',
                    description: 'settings'
                },
            ]
        },
        {
            title: 'ajuda',
            links: [
                {
                    url: '/myaccount',
                    description: 'contactos'
                },
                {
                    url: '/myaccount',
                    description: 'perguntas frequentes'
                },
                {
                    url: '/myaccount',
                    description: 'termos & condições'
                },
                {
                    url: '/myaccount',
                    description: 'políticas de privacidade'
                },
            ]
        },
        {
            title: 'demanda',
            links: [
                {
                    url: '/myaccount',
                    description: 'sobre'
                },
                {
                    url: '/myaccount',
                    description: 'fazendas'
                },
                {
                    url: '/myaccount',
                    description: 'produto'
                },
                {
                    url: '/myaccount',
                    description: 'detalhes de produtos'
                },
                {
                    url: '/myaccount',
                    description: 'rastrear pedido'
                },
            ]
        },
    ];

    const ContainerCopyright = styled(Container)`
        min-height: 75px;
        padding: 0;
        border: 2px solid var(--)
        background-color: red;
        padding: 0;

        align-items: center;
        justify-content: center;

        border-top: 1px solid rgba(255, 255, 255, 0.2);
    `;
    const ContainerBaseCopyright = styled['div']`
        flex: 1 1 100px;

        &.left {
            justify-content: flex-start;
        }
        &.right {
            justify-content: flex-end;
        }
    `;
    const CircleSocialMediaContainer = styled['a']`
        width: 45px;
        height: 45px;
        border-radius: 50px;
        transition: 0.15s ease-in;
        
        &:hover {
            background-color: var(--Success);
        }
        & > .icon-copyright-svg {
            color: var(--Green-300);
        }
        
        & > .icon-copyright-svg.facebook-icon,
        & > .icon-copyright-svg.twitter-icon {
            fill: var(--Green-300);
            stroke: none;
        }

        & > .icon-copyright-svg:hover > .facebook-icon,
        & > .icon-copyright-svg:hover > .twitter-icon {
            fill: var(--White);
        }
    `;
    const TextCopyright = styled['span']`
        font: var(--Body-Small-400);
        color: var(--Green-500);
    `;
    const ButtonPaymentMethod = styled['button']`
        border: 1px solid var(--White);
        background-color: transparent;

        padding: 3px 20px;
        border-radius: var(--border-radius);

        & > .icon-paymentmethod-svg {
            color: var(--White);
        }
    `;

    const sizePaymentIcon = 25;

    return (
        <FooterMainContainer>
            <Container className="d-flex">
                <ContainerBase>
                    <GroupList className="d-flex about">
                        <TitleTopList>sobre a agricolar</TitleTopList>
                        <TextAbout>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</TextAbout>
                        <ContactContainer className="d-flex">
                            <SubContactContainer className="d-flex">
                                <LinkContact href="tel:+244993895962">(993) 895-962</LinkContact>
                                <div></div>
                            </SubContactContainer>
                            <span>ou</span>
                            <SubContactContainer className="d-flex">
                                <LinkContact href="mailto:delcioextends2022@gmail.com">delcioextends2022@gmail.com</LinkContact>
                                <div></div>
                            </SubContactContainer>
                        </ContactContainer>
                    </GroupList>
                </ContainerBase>

                {
                    LIST.map((item) => (
                        <ContainerBase key={uuid()}>
                            <GroupList>
                                <TitleTopList>{item.title}</TitleTopList>
                                <List>
                                    {
                                        item.links.map((link) => (
                                            <ItemList key={uuid()}>
                                                <LinkItem href={link.url} target="_self">{link.description}</LinkItem>
                                            </ItemList>
                                        ))
                                    }
                                </List>
                            </GroupList>
                        </ContainerBase>

                    ))
                }

                <ContainerBase>
                    <GroupList>
                        <TitleTopList>instagram</TitleTopList>
                        <ListNew className="d-flex">
                            {/* <ItemList>
                                <LinkItem href="/myaccount" target="_self">
                                    <Image src={i1} />
                                </LinkItem>
                            </ItemList> */}
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i2} />
                                </LinkItem>
                            </ItemList>
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i3} />
                                </LinkItem>
                            </ItemList>
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i4} />
                                </LinkItem>
                            </ItemList>
                        </ListNew>
                        <ListNew className="d-flex">
                            {/* <ItemList>
                                <LinkItem href="/myaccount" target="_self">
                                    <Image src={i5} />
                                </LinkItem>
                            </ItemList> */}
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i6} />
                                </LinkItem>
                            </ItemList>
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i7} />
                                </LinkItem>
                            </ItemList>
                            <ItemList>
                                <LinkItem href="/myaccount" target="_self" className="d-flex">
                                    <Image src={i8} />
                                </LinkItem>
                            </ItemList>
                        </ListNew>
                    </GroupList>
                </ContainerBase>
            </Container>

            {/* A trabalhar no Copyright */}
            <ContainerCopyright className="d-flex">
                <ContainerBaseCopyright className="d-flex container-base-copyright left">
                    <CircleSocialMediaContainer className="d-flex" href="#">
                        <Facebook className="icon-copyright-svg facebook-icon" />
                    </CircleSocialMediaContainer>
                    <CircleSocialMediaContainer className="d-flex" href="#">
                        <Twitter className="icon-copyright-svg twitter-icon" />
                    </CircleSocialMediaContainer>
                    <CircleSocialMediaContainer className="d-flex" href="#">
                        <Instagram className="icon-copyright-svg instagram-icon" />
                    </CircleSocialMediaContainer>
                </ContainerBaseCopyright>

                <ContainerBaseCopyright className="d-flex">
                    <TextCopyright>Agricolar eCommerce © 2021. All Rights Reserved</TextCopyright>
                </ContainerBaseCopyright>

                <ContainerBaseCopyright className="d-flex container-base-copyright right">
                    <ButtonPaymentMethod className="d-flex">
                        <FaApplePay size={sizePaymentIcon} className="icon-paymentmethod-svg" />
                    </ButtonPaymentMethod>
                    <ButtonPaymentMethod className="d-flex">
                        <SiVisa size={sizePaymentIcon} className="icon-paymentmethod-svg" />
                    </ButtonPaymentMethod>
                    <ButtonPaymentMethod className="d-flex">
                        <FaCcDiscover size={sizePaymentIcon} className="icon-paymentmethod-svg" />
                    </ButtonPaymentMethod>
                    <ButtonPaymentMethod className="d-flex">
                        <BiLogoMastercard size={sizePaymentIcon} className="icon-paymentmethod-svg" />
                    </ButtonPaymentMethod>
                </ContainerBaseCopyright>
            </ContainerCopyright>
        </FooterMainContainer>
    );
};

export default FooterMain;