import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface ITracker {
    items?: any[];
    index?: number;
}

const TrackerContainer = styled['div']`
    gap: 5px;
    // background-color: yellow;
    position: absolute;
    bottom: 15px
`;
const BoubleCircle = styled['div']`
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background-color: var(--Gray-200);
    transition: 0.2s ease-in;
    
    &.active-circle {
        width: 23px !important;
        background-color: var(--Success) !important;
    }
`;


const Tracker: FC<ITracker> = ({ items = [], index = 0 }) => {
    const boubleCircleRef = useRef<Array<HTMLDivElement | null>>([]);
    const [mounted, setMounted] = useState<boolean>(false);
    const [pastValue, setPastValue] = useState<number>(index);

    useEffect(() => {
        // Este código será executado após a montagem do componente
        if (mounted) {
            // O componente está sendo remontado
            if (boubleCircleRef.current) {
                if (boubleCircleRef.current[pastValue]) {
                    boubleCircleRef.current[pastValue]?.classList.remove('active-circle');
                }
            }

            /* */ setPastValue(index);

            if (boubleCircleRef.current) {
                if (boubleCircleRef.current[pastValue]) {
                    boubleCircleRef.current[pastValue]?.classList.add('active-circle');
                }
            }

        } else {
            // O componente está sendo montado pela primeira vez
            if (boubleCircleRef.current) {
                if (boubleCircleRef.current[pastValue]) {
                    boubleCircleRef.current[pastValue]?.classList.add('active-circle');
                }
            }
            setMounted(true);
        }
    }, [mounted]);

    return (
        <TrackerContainer className="d-flex">
            {
                items.map((_, index) => (<BoubleCircle ref={(element) => boubleCircleRef.current[index] = element} data-index={`${index}`} className="bouble-circle" key={uuid()} />))
            }
        </TrackerContainer>
    )
};


export default Tracker;