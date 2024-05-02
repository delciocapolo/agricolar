import ContextComponent from "../ContextComponent/ContextComponent";
import Footer from "../Footer/Footer";
import Menu from "../Navigation/Menu";
import {
    Container,
    ContainerTitle,
    FarmsContainer,
    LineContainerTitle,
    ListFarms,
    TitleContainer
} from "./InternalComponents/BaseFarms";

const Farms = () => {
    return (
        <ContextComponent>
            <FarmsContainer>
                <Menu />
                <Container>
                    <ContainerTitle>
                        <TitleContainer>Fazendas+</TitleContainer>
                        <LineContainerTitle />
                    </ContainerTitle>
                    <ListFarms />
                </Container>
                <Footer />
            </FarmsContainer>
        </ContextComponent>
    );
};

export default Farms;