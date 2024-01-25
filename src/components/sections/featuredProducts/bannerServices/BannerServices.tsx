import { Archive, Cpu, Truck } from "lucide-react";
import { FC } from "react";

const BannerServices: FC = () => {
    const size = 30;

    return (
        <article className="banner-services d-grid mg-bottom">
            <div className="content">
                <h1 className="title">como nos comprometemos para uma cultura de sustentabilidade</h1>
            </div>
            <nav className="container d-flex">
                <div className="item-service d-grid">
                    <div className="container-image-service">
                        <Cpu className="image-service" size={size} />
                    </div>
                    <div className="container-description-service">
                        <h1 className="description-service Heading-5">Tecnologia</h1>
                    </div>
                    <div className="container-text-service">
                        <p className="text-service">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur 
                            dolorum quo tempora ex quis eligendi iste ad laudantium sequi dignissimos 
                            nostrum porro aliquid esse, architecto eos possimus iure quae adipisci.
                        </p>
                    </div>
                </div>
                <div className="item-service d-grid">
                    <div className="container-image-service">
                        <Archive className="image-service" size={size} />
                    </div>
                    <div className="container-description-service">
                        <h1 className="description-service Heading-5">Tecnologia</h1>
                    </div>
                    <div className="container-text-service">
                        <p className="text-service">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur 
                            dolorum quo tempora ex quis eligendi iste ad laudantium sequi dignissimos 
                            nostrum porro aliquid esse, architecto eos possimus iure quae adipisci.
                        </p>
                    </div>
                </div>
                <div className="item-service d-grid">
                    <div className="container-image-service">
                        <Truck className="image-service" size={size} />
                    </div>
                    <div className="container-description-service">
                        <h1 className="description-service Heading-5">Tecnologia</h1>
                    </div>
                    <div className="container-text-service">
                        <p className="text-service">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur 
                            dolorum quo tempora ex quis eligendi iste ad laudantium sequi dignissimos 
                            nostrum porro aliquid esse, architecto eos possimus iure quae adipisci.
                        </p>
                    </div>
                </div>
            </nav>
        </article>
    )
}

export default BannerServices;