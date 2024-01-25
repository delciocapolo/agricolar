import { BtnReadMore } from "../../../generalUse/buttons"
import backgroundImageUrl from '../../../../assets/backgroundImage.jpg';

const BannerStarted = () => {
    return (
        <article className="banner-started d-grid mg-bottom">
            <div className="content d-grid">
                <h1>entrega de produtos frescos.<br />da fazenda às patreleiras </h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at 
                    inventore quo, quis libero amet iusto asperiores minima enim illum.
                    <br />
                    dolorem perspiciatis provident id culpa suscipit. Culpa blanditiis 
                    dolorum sapiente.
                    <br />
                    dolorem perspiciatis provident id culpa suscipit. Culpa blanditiis 
                    dolorum sapiente.
                    dolorem perspiciatis provident id culpa suscipit. Culpa blanditiis 
                    dolorum sapiente.
                    dolorem perspiciatis provident id culpa suscipit. Culpa blanditiis 
                    dolorum sapiente.
                </p>
                
                <BtnReadMore text="ler mais" />
            </div>
            <div className="container d-grid">
                <img src={backgroundImageUrl} alt="Imagem" className="image-epoch" />
                <span className="spn-desc-img">desde 1993</span>
            </div>
        </article>
    )
}

export default BannerStarted;