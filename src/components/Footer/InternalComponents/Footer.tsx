import { v4 as uuid } from "uuid";

// 
import i2 from "../../../assets/instagram/i2.jpg";
import i3 from "../../../assets/instagram/i3.jpg";
import i4 from "../../../assets/instagram/i4.jpg";
import i6 from "../../../assets/instagram/i6.jpg";
import i7 from "../../../assets/instagram/i7.jpg";
import i8 from "../../../assets/instagram/i8.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa6";
import { BiLogoMastercard } from "react-icons/bi";
import { LIST } from "./datas/footerLinks";
import {
    FooterMainContainer,
    ButtonPaymentMethod,
    CircleSocialMediaContainer,
    ContactContainer,
    Container,
    ContainerBase,
    ContainerBaseCopyright,
    ContainerCopyright,
    GroupList,
    Image,
    ItemList,
    LinkContact,
    LinkItem,
    List,
    ListNew,
    SubContactContainer,
    TextAbout,
    TextCopyright,
    TitleTopList
} from "./ComponentBase/ComponentBase";

const FooterMain = () => {
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