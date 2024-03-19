import { MouseEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import Box from "../main-components/TopLevelComponent/Box/Box";
import Information from "./Information/Information";
import Tracker from "./Tracker/Tracker";
import Arrow from "./Arrow/Arrow";
import { PaddingContext } from "../contexts/padding";
import { items } from "./datas/datas";
import {
    ImageOFFContainer,
    Image,
    ImageContainer,
    OFF,
    OFFText,
    PorcentText
} from "./ComponentBase/ComponentBaseHeader";

const Header = () => {
    const { padding } = useContext(PaddingContext);

    const HeaderContainer = styled(Box)`
            position: relative;
            width: 100%;
            // min-height: 700px;
            min-height: calc(100vh - 214px);
            padding: ${padding};
            background-color: var(--White);
            flex-direction: column;
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
    }

    return (
        <HeaderContainer className="d-flex">
            <Arrow onClickRight={handleClickRight} onClickLeft={handleClickLeft} />

            <ImageOFFContainer className="d-flex">
                <ImageContainer className="d-flex">
                    <Image src={items[currentIndex].image.path} alt={items[currentIndex].image.describe} />
                    <OFF className="d-flex">
                        <PorcentText className="">70%</PorcentText>
                        <OFFText>off</OFFText>
                    </OFF>
                </ImageContainer>
                <Information />
            </ImageOFFContainer>

            <Tracker items={items} index={currentIndex} />
        </HeaderContainer>
    );
};

export default Header;