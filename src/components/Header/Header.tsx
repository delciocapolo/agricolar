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
        min-height: 700px;
        height: calc(100vh - 214px);
        padding: 0;
        background-color: red;
    `;

    const Image = styled['img']`
        width: 100%;
        height: 430px;
        object-fit: cover;
    `;

    const OFF = styled['div']`
        position: absolute;
        border-radius: 50%;
        width: 100px;
        height: 100px;
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
        gap: 0;
        background-color: yellow;
        justify-content: flex-start;
    `;

    const ImageContainer = styled['div']`
        position: relative;
        width: 50%;
        background-color: purple;
    `;

    const PorcentText = styled['h1']`
        font: var(--Display05-600);
        font-size: 2rem;
    `;

    const OFFText = styled['span']`
        font: var(--Large-Caps-Lock);
        letter-spacing: 2px;
    `;

    return (
        <Header className="d-flex">
            <Arrow />
            <ImageOFFContainer className="d-flex">
                <ImageContainer className="d-flex">
                    <Image src={CestoFrutas} alt="Imagem de cesto de frutas" />
                    <OFF className="d-flex">
                        <PorcentText>70%</PorcentText>
                        <OFFText>OFF</OFFText>
                    </OFF>
                </ImageContainer>
                <Information />
            </ImageOFFContainer>
            <Tracker items={[0, 1, 2, 3]} index={0} />
        </Header>
    );
};

export default Header;