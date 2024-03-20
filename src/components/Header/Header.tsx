import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import Tracker from "./Tracker/Tracker";
import Arrow from "./Arrow/Arrow";
import { items } from "./datas/datas";
import { ButtonShop, ContainerCategoryAndImage, ContainerImage, ContainerMenuButtonCategory, ContainerTextImageHeader, ContainerTitle, ImageHeader, ItemButtonCategory, LinkButtonCategory, SubTitle, Title } from "./ComponentBase/ComponentBaseHeader";
import { Apple, Coffee, CookingPot, Drumstick, Fish, MoveRight, Plus, Salad } from "lucide-react";

import imageHeaderPhoto from "../../assets/header/HeaderPhoto2.jpg";
import { useHeaderContext } from "../contexts/HeaderContext";

const Header = () => {

    const HeaderContainer = styled['div']`
        width: 100%;
        height: calc(100vh - 190px);

        position: relative;
        background-color: var(--White);
        flex-direction: column;
        gap: 0;
        padding: 0;
    `;
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClickRight = (_?: MouseEvent<HTMLButtonElement>) => {
        console.log(currentIndex);
        setCurrentIndex(prev => {
            const next = prev + 1;

            if (next >= items.length) return prev;

            return next;

        });
        console.log(currentIndex);
    }
    const handleClickLeft = (_?: MouseEvent<HTMLButtonElement>) => {
        console.log(currentIndex);
        setCurrentIndex(prev => {
            const next = prev - 1;

            if (next < 0) return prev;

            return next;
        });
        console.log(currentIndex);
    };

    const { actived } = useHeaderContext();

    return (
        <HeaderContainer className="d-flex">
            <Arrow onClickRight={handleClickRight} onClickLeft={handleClickLeft} />

            <ContainerCategoryAndImage className={`d-flex ${actived === true && 'actived'}`}>
                <ContainerMenuButtonCategory className="container-menu-button-category">
                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Apple className="icon-buttoncategory-svg" />
                            <span>frutas</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>
                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Salad className="icon-buttoncategory-svg" />
                            <span>vegetais</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>

                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Fish className="icon-buttoncategory-svg" />
                            <span>frutos do mar</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>

                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Drumstick className="icon-buttoncategory-svg" />
                            <span>carne</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>

                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Coffee className="icon-buttoncategory-svg" />
                            <span>drinks e bebidas</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>

                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <CookingPot className="icon-buttoncategory-svg" />
                            <span>cozinha</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>

                    <ItemButtonCategory>
                        <LinkButtonCategory className="d-flex" href="#">
                            <Plus className="icon-buttoncategory-svg" />
                            <span>todas categorias</span>
                        </LinkButtonCategory>
                    </ItemButtonCategory>
                </ContainerMenuButtonCategory>

                <ContainerImage className="container-image-header">
                    <ImageHeader src={imageHeaderPhoto} alt="Imagem de amostragem" />
                    <ContainerTextImageHeader className="d-flex container-text-image-header">
                        <ContainerTitle className="d-flex">
                            <Title>alimentos orgânicos & saudáveis</Title>
                            <SubTitle>salve até <span>48%</span> de desconto</SubTitle>
                            <ButtonShop className="d-flex">
                                <span>Compre agora</span>
                                <MoveRight />
                            </ButtonShop>
                        </ContainerTitle>
                        <Tracker items={items} index={currentIndex} />
                    </ContainerTextImageHeader>
                </ContainerImage>
            </ContainerCategoryAndImage>
        </HeaderContainer>
    );
};

export default Header;