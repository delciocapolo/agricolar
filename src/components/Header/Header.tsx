import styled from "@emotion/styled";
import Box from "../main-components/TopLevelComponent/Box/Box";
import CestoFrutas from '../../assets/products/Image.jpg';
import Information from "./Information/Information";
import Tracker from "./Tracker/Tracker";
import Arrow from "./Arrow/Arrow";

const Header = () => {
    const Header = styled(Box)`
        position: relative;
        width: 100%;
        // min-height: 700px;
        height: calc(100vh - 214px);
        padding: 0;
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

        right: 10px;
        top: 20%;

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
        background-color: purple;
    `;

    const PorcentText = styled['h1']`
        font: var(--Display05-600);
        font-size: 1.8rem;
        text-align: center;
        line-height: 1;
    `;

    const OFFText = styled['span']`
        font: var(--Large-Caps-Lock);
        letter-spacing: 2px;
        text-transform: uppercase;
    `;

    return (
        <Header className="d-flex">
            <Arrow />
            <ImageOFFContainer className="d-flex">
                <ImageContainer className="d-flex">
                    <Image src={CestoFrutas} alt="Imagem de cesto de frutas" />
                    <OFF className="d-flex">
                        <PorcentText className="">70%</PorcentText>
                        <OFFText>off</OFFText>
                    </OFF>
                </ImageContainer>
                <Information />
            </ImageOFFContainer>
            <Tracker items={[0, 1, 2, 3]} index={2} />
        </Header>
    );
};

export default Header;