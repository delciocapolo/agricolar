import { useState } from "react";
import { ContentContainer, ContentHeaderContainer, Header } from "./BaseLogin";

const ContainerContentComponent = () => {
    const [autoIncrement] = useState<number>(0);
    const ArrayFrases = [
        "Semeie o sucesso em sua fazenda conosco e colha os frutos de uma produção próspera.",
        "Transforme desafios em oportunidades e leve sua fazenda para um novo patamar de eficiência conosco.",
        "Inovação agrícola para fazendeiros modernos: juntos, podemos alcançar novos horizontes.",
        "Cultive seu potencial e expanda os limites da sua produção com nossas soluções agrícolas.",
        "Nossa missão é impulsionar sua fazenda rumo ao crescimento sustentável e lucrativo.",
        "Agricultura de excelência: onde conhecimento, tecnologia e dedicação se encontram.",
        "Crie raízes fortes para o futuro da sua fazenda com nossos serviços especializados.",
        "Deixe-nos ser o parceiro que você precisa para cultivar uma fazenda de sucesso.",
        "Do campo à mesa, estamos ao seu lado para garantir qualidade e produtividade.",
        "Acreditamos no potencial da sua fazenda. Vamos juntos alcançar grandes conquistas."
    ];

    return (
        <ContentContainer className="d-flex" >
            <ContentHeaderContainer className="d-flex" >
                <Header>{ArrayFrases[autoIncrement]}</Header>
            </ContentHeaderContainer>
            <ContentHeaderContainer className="d-flex">
                <Header>{ArrayFrases[4]}</Header>
            </ContentHeaderContainer>
        </ContentContainer>
    );
}

export default ContainerContentComponent;