import moment from 'moment';
import { useEffect, useState, FC } from 'react';

interface IOfferTime {
    dias: number | string;
    horas: number | string;
    minutos: number | string;
    segundos: number | string;
}

interface IAds {
    offerTime: string;
}

const Ads:FC<IAds> = ({offerTime}) => {
    const [tempoRestante, setTempoRestante] = useState<IOfferTime>({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {
        // Define a data de expiracao do anuncio
        const dataExpiracao = moment(offerTime);

        // calcula o tempo restante ate a data de expiracao
        const tempoRestante = setInterval(() => {
            const agora = moment();
            const diferenca = moment.duration(dataExpiracao.diff(agora));

            // formata o tempo restante
            const dias = diferenca.days();
            const horas = diferenca.hours();
            const minutos = diferenca.minutes();
            const segundos = diferenca.seconds();

            setTempoRestante({
                dias: dias,
                horas: horas,
                minutos: minutos,
                segundos: segundos
            });
        }, 1000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(tempoRestante);
    }, []);

    return (
        <div className="container-product-offer d-flex">
            <div className="container-ad-offer">
                <h2 className="title-ad-offer">Apresse-se! A oferta termina em:</h2>
            </div>
            <div className="container-offer-time d-flex">
                <div className="days d-flex">
                    <span className="container-days">{tempoRestante.dias}</span>
                    <span className="container-days">Dias</span>
                </div>
                <span className="2points">:</span>
                <div className="hours d-flex">
                    <span className="container-hours">{tempoRestante.horas}</span>
                    <span className="container-hours">Horas</span>
                </div>
                <span className="2points">:</span>
                <div className="mins d-flex">
                    <span className="container-mins">{tempoRestante.minutos}</span>
                    <span className="container-mins">Minutos</span>
                </div>
                <span className="2points">:</span>
                <div className="secs d-flex">
                    <span className="container-secs">{tempoRestante.segundos}</span>
                    <span className="container-secs">Segundos</span>
                </div>
            </div>
        </div>
    );
}

export default Ads;