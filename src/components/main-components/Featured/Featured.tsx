import styled from "@emotion/styled";
import Box from "../TopLevelComponent/Box/Box";
import Feature from "./internalComponents/Feature";
import { Headset, Package, ShieldCheck, Truck } from "lucide-react";
import Line from "../TopLevelComponent/Box/Line";

const FeaturedContainer = styled(Box)`
    box-shadow: var(--box-shadow-double-face);
    border-radius: var(--border-radius);
    gap: 0;
    width: clamp(310px, 85%, 1224px);
    margin-top: 20px;
`;

const FeaturedSubContainer = styled(Box)`
    padding: 0;
    gap: 0;
`

const Featured = () => {
    const configs = {
        size: 40,
        absoluteStrokeWidth: true,
    }

    return (
        <FeaturedContainer className="featured">
            <FeaturedSubContainer>
                <FeaturedSubContainer>
                    <Feature title="Frete grátis" text="Frete grátis em todos os pedidos" icon={<Truck {...configs} />} />
                    <Line />
                </FeaturedSubContainer>
                <FeaturedSubContainer>
                    <Feature title="Suporte ao cliente" text="Acesso instantâneo ao suporte" icon={<Headset {...configs} />} />
                    <Line />
                </FeaturedSubContainer>
            </FeaturedSubContainer>
            <FeaturedSubContainer>
                <FeaturedSubContainer>
                    <Feature title="Pagamento 100% seguro" text="Seu dinheiro estará seguro" icon={<ShieldCheck {...configs} />} />
                    <Line />
                </FeaturedSubContainer>
                <FeaturedSubContainer>
                    <Feature title="Garantia de reembolso" text="Garantia de reembolso de 30 dias" icon={<Package {...configs} />} />
                </FeaturedSubContainer>
            </FeaturedSubContainer>
        </FeaturedContainer>
    )
};

export default Featured;