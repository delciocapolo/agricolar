import styled from "@emotion/styled";
import { MoveRight } from "lucide-react";

const InformationContainer = styled['div']`
    width: 46%;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    // background-color: green;
    // padding: 0.5rem;
`;

const Heading = styled['div']`
    flex-direction: column;
    // justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
`;

const HeadingWelcome = styled['h1']`
    font: 0.875rem 'Segoe-script';
    color: var(--Success);
    padding: 0 0.2rem;
    // background-color: brown;
`;

const HeadingContent = styled(HeadingWelcome)`
    font: 3.5rem 'Poppins-regular';
    color: var(--Green-900);
    padding: 0;
    line-height: 1.2;
`;

const InfoText = styled(HeadingWelcome)`
    font: var(--Body-Large-400);
    color: var(--Green-500);
    text-transform: none;
`;

const ButtonShop = styled['button']`
    font: var(--Body-Medium-600);
    padding: 0.6rem 2rem;
    border-radius: 50px;
    background-color: var(--Success);


    & > * {
        color: var(--White);
        text-transform: none;
    }
`;

const Information = () => {
    const iconConfigs = {

    };

    return (
        <InformationContainer className="d-flex">
            <Heading className="d-flex">
                <HeadingWelcome>seja-bem vindo ao agricolar</HeadingWelcome>
                <HeadingContent>alimentos orgânicos & saudáveis</HeadingContent>
            </Heading>

            <InfoText>Frete grátis em todos os pedidos. Entregamos, com prazer</InfoText>

            <ButtonShop className="d-flex">
                <span>Compre agora</span>
                <MoveRight {...iconConfigs} />
            </ButtonShop>
        </InformationContainer>
    )
};

export default Information;