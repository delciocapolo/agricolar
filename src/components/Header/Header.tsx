import styled from "@emotion/styled";
import Box from "../main-components/TopLevelComponent/Box/Box";
import cestoFrutas from '../../assets/products/Image.jpg';
import fruta1 from '../../assets/products/Rectangle 5-1.jpg';
import Information from "./Information/Information";
import Tracker from "./Tracker/Tracker";
import Arrow from "./Arrow/Arrow";
import { MouseEvent, useContext, useState } from "react";
import { PaddingContext } from "../contexts/padding";

interface IItemsArrow {
    image: {
        path: string;
        describe?: string;
    }
};

const items: IItemsArrow[] = [
    {
        image: {
            path: cestoFrutas,
            describe: 'Imagem de cesto de frutas'
        }
    },
    {
        image: {
            path: fruta1,
            describe: 'Imagem de frutas'
        }
    },
];

const Header = () => {
    const { padding } = useContext(PaddingContext);

    const HeaderContainer = styled(Box)`
            position: relative;
            width: 100%;
            // min-height: 700px;
            height: calc(100vh - 214px);
            padding: ${padding};
            background-color: var(--White);
            flex-direction: column;
        `;

    const Image = styled['img']`
            width: 100%;
            height: 430px;
            object-fit: cover;
        `;

    const OFF = styled['div']`
            position: absolute;
            border-radius: 50%;
            width: 95px;
            height: 95px;
            background-color: var(--Warning);
    
            right: 30px;
            top: 10%;
            transform: rotate(20deg);
            padding-top: 0.7rem;
    
            gap: 0;
            flex-direction: column;
    
            & > * {
                color: var(--White);
            }
        `;

    const ImageOFFContainer = styled['div']`
            width: 100%;
            gap: 0.9rem;
            justify-content: center;
        `;

    const ImageContainer = styled['div']`
            position: relative;
            width: 50%;
            background-color: transparent;
        `;

    const PorcentText = styled['h1']`
            font: var(--Display05-600);
            font-size: 1.8rem;
            text-align: center;
            line-height: 1;
            transition: 0.2s ease-in;
        `;

    const OFFText = styled['span']`
            font: var(--Large-Caps-Lock);
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: 0.2s ease-in;
        `;

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClickRight = (_: MouseEvent<HTMLButtonElement>) => {
        console.log(currentIndex);
        setCurrentIndex(prev => {
            const next = prev + 1;

            if (next >= items.length) return prev;

            return next;

        });
        console.log(currentIndex);
    }
    const handleClickLeft = (_: MouseEvent<HTMLButtonElement>) => {
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