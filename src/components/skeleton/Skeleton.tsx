import { JSX } from "react";
import { v4 as uuidv4} from "uuid";
import { ButtonPars } from "./DefaultComponents";
import backgroundImage from "../../assets/background.jpg"
import Service from "./Service";
import { services } from "../../DTO/service";

const Skeleton = ():JSX.Element => {
    return (
        <section className="skeleton">
           <article className="banner-gennesis b-image">
                <div className="container d-grid">
                    <div className="content d-grid">
                        <h1 className="title">o papel da tecnologia em revolucionar a agricultura</h1>
                        <h3 className="subtitle">o papel da tecnologia em revolucionar a agricultura - o papel da tecnologia em revolucionar a agricultura</h3>
                    </div>
                    <div className="action">
                        <ButtonPars btn1 btn2 text1="começar" text2="ler mais sobre" />
                    </div>
                </div>
            </article>
            <article className="history">
                <div className="container d-grid">
                    <div className="content d-grid">
                        <h1 className="title">
                            nossa paixão pela agricultura alimentando o crescimento e sustentando o futuro 
                        </h1>
                        <h3 className="subtitle">
                            li europan lingues es membres del sam familie. lor separat existentie es un myth. por scientie, musical, sport etc. litot europa usa li sam vocabular.
                        </h3>
                        <ButtonPars btn1 text1="começar" />
                    </div>
                    <div className="image d-grid">
                        <img src={backgroundImage} alt="Uma imagem" className="img-history" />
                        <h1 className="describe-content">desde 2023</h1>
                    </div>
                </div>
            </article>
            <Service 
                title="nossos serviços" 
                description="li europan lingues es membres del sam familie. lor separat existentie es un myth. por scientie, musical, sport etc. litot europa usa li sam vocabular" 
                services={services} 
                key={uuidv4()} 
            />
        </section>
    )
};

export default Skeleton;