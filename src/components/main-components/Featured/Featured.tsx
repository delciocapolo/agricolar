import styled from "@emotion/styled";
import Box from "../TopLevelComponent/Box/Box";
import Feature from "./internalComponents/Feature";
import { Headset, Package, ShieldCheck, Truck } from "lucide-react";
import Line from "../TopLevelComponent/Box/Line";
import { FC } from "react";

const FeaturedContainer = styled(Box)`
    width: clamp(310px, 85%, 1224px);
    min-height: 105px;
    box-shadow: var(--box-shadow-double-face);
    border-radius: var(--border-radius);
    gap: 0;
    background-color: var(--White);

    &.big {
        padding: 0;

        & > .featured-subcontainer > .featured-subcontainer-item[data-index="1"]:hover {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        & > .featured-subcontainer > .featured-subcontainer-item[data-index="4"]:hover {
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        & > .featured-subcontainer > .featured-subcontainer-item {
            transition: 0.1s ease-out;
        }
        & > .featured-subcontainer > .featured-subcontainer-item:hover {
            background-color: var(--Success);
            min-height: 105px;
        }

        & > .featured-subcontainer > .featured-subcontainer-item:hover > .feature > div > * {
            color: var(--White);
        }

        & > .featured-subcontainer > .featured-subcontainer-item > .feature {
            flex-direction: column;
            flex-wrap: nowrap;
            min-height: 221px;
            padding: 2.5rem 2rem;
        }

        & > .featured-subcontainer > .featured-subcontainer-item > .feature > div > .icon-subcontainer {
            padding: 0.7rem;
            background-color: var(--White);
            border-radius: 50px;
            box-shadow: 0 0 2px 1px rgba(51, 51, 51, 0.1), 0 0 12px 10px rgba(51, 51, 51, 0.02);
                
            & > * {
                color: var(--Success);
                width: 1.8rem;
                height: 1.8rem;
            }
        }

        & > .featured-subcontainer > .featured-subcontainer-item > .feature > div {
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
        }

        & > .featured-subcontainer > .featured-subcontainer-item > .line-featured {
            height: 221px;
            padding: 0;
            padding: 0.5px;
        }

    }
`;

const FeaturedSubContainer = styled(Box)`
    padding: 0;
    gap: 0;
    min-height: 100px;
`

const Featured: FC<{ className?: 'big' }> = ({ className = undefined }) => {
    const configs = {
        size: 40,
        absoluteStrokeWidth: true,
    }

    return (
        <FeaturedContainer className={`featured ${className}`}>
            <FeaturedSubContainer className="featured-subcontainer">
                <FeaturedSubContainer className="featured-subcontainer-item" data-index="1">
                    <Feature title="Frete grátis" text="Frete grátis em todos os pedidos" icon={<Truck {...configs} />} />
                    <Line className="line-featured" />
                </FeaturedSubContainer>
                <FeaturedSubContainer className="featured-subcontainer-item" data-index="2">
                    <Feature title="Suporte ao cliente" text="Acesso instantâneo ao suporte" icon={<Headset {...configs} />} />
                    <Line className="line-featured" />
                </FeaturedSubContainer>
            </FeaturedSubContainer>
            <FeaturedSubContainer className="featured-subcontainer">
                <FeaturedSubContainer className="featured-subcontainer-item" data-index="3">
                    <Feature title="Pagamento 100% seguro" text="Seu dinheiro estará seguro" icon={<ShieldCheck {...configs} />} />
                    <Line className="line-featured" />
                </FeaturedSubContainer>
                <FeaturedSubContainer className="featured-subcontainer-item" data-index="4">
                    <Feature title="Garantia de reembolso" text="Garantia de reembolso de 30 dias" icon={<Package {...configs} />} />
                </FeaturedSubContainer>
            </FeaturedSubContainer>
        </FeaturedContainer>
    )
};

export default Featured;