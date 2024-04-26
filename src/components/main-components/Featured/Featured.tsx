import Feature from "./internalComponents/Feature";
import { Headset, Package, ShieldCheck, Truck } from "lucide-react";
import { FC } from "react";
import { FeaturedContainer, FeaturedSubContainer } from "./internalComponents/Featured";

const Featured: FC<{ className?: 'big' | '' }> = ({ className = '' }) => {
    const configs = {
        size: 40,
        absoluteStrokeWidth: true,
    }

    return (
        <FeaturedContainer className={`d-flex ${className}`}>
            <FeaturedSubContainer className="d-flex">
                <Feature title="Frete grátis" text="Frete grátis em todos os pedidos" icon={<Truck {...configs} />} index={1} />
                <Feature title="Suporte ao cliente" text="Acesso instantâneo ao suporte" icon={<Headset {...configs} />} index={2} />
            </FeaturedSubContainer>
            <FeaturedSubContainer className="d-flex">
                <Feature title="Pagamento 100% seguro" text="Seu dinheiro estará seguro" icon={<ShieldCheck {...configs} />} index={3} />
                <Feature title="Garantia de reembolso" text="Garantia de reembolso de 30 dias" icon={<Package {...configs} />} index={4} />
            </FeaturedSubContainer>
        </FeaturedContainer>
    );
};

export default Featured;
