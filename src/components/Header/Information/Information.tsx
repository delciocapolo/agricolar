import styled from "@emotion/styled";
import { MoveRight } from "lucide-react";

const InformationContainer = styled['div']`
    width: 50%;
    background-color: green;
`;

const Heading = styled['div']`
    flex-direction: column;
    justify-content: flex-start;
`;

const HeadingWelcome = styled['h1']`

`;

const HeadingContent = styled(HeadingWelcome)`

`;

const InfoText = styled(HeadingWelcome)`

`;

const ButtonShop = styled['button']`

`;
const Information = () => {
    const iconConfigs = {

    };

    return (
        <InformationContainer>
            <Heading className="d-flex">
                <HeadingWelcome>welcome to shopery</HeadingWelcome>
                <HeadingContent>Fresh & Healthy  organic food</HeadingContent>
            </Heading>

            <InfoText>Free shipping on all our order . we deliver, you enjoy</InfoText>

            <ButtonShop className="d-flex">
                <span>Shop now</span>
                <MoveRight {...iconConfigs} />
            </ButtonShop>
        </InformationContainer>
    )
};

export default Information;