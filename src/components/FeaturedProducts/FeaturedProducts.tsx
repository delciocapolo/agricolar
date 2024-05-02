import styled from "@emotion/styled"
import { Container as ContainerBase } from "../Container/Container";
import Normal from "../main-components/Product5n/Normal";

const FeaturedProductsContainer = styled['div']`
    width: 100%;
    padding: 3rem 0;
`;
const Container = styled(ContainerBase)`
    margin: auto;
    min-height: 0;
`;
const Title = styled['h1']`
    // font: var(--Display03-600);
    font: var(--Heading05-600);
    color: var(--Green-900);
    text-align: left;
`;
const Products = styled['div']`
    width: 100%;
    gap: 0;
    padding: 3rem 0;
    
    & > div {
        box-shadow: inset 0 0 0 1px rgba(51, 51, 51, 0.1), 0 0 1px 1px rgba(51, 51, 51, 0.03);
        border-radius: 0;
        flex: 1 1 242px;

        &:hover {
            transform: scale(1.02);
        }
    }
`;

const FeaturedProducts = () => {
    return (
        <FeaturedProductsContainer>
            <Container>
                <Title>produtos em destaque</Title>
                <Products className="d-flex">
                    <Normal price={12} ratingNumber={3} saleStatus={['sale']} saleValue={50} />
                    <Normal price={12} ratingNumber={3} />
                    <Normal price={12} ratingNumber={3} />
                    <Normal price={12} ratingNumber={3} />
                    <Normal price={12} ratingNumber={3} />
                </Products>
            </Container>
        </FeaturedProductsContainer>
    )
};

export default FeaturedProducts;