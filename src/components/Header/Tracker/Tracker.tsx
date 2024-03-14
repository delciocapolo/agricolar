import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface ITracker {
    items?: any[];
    index?: number;
}

const TrackerContainer = styled.div`
    gap: 5px;
    // background-color: yellow;
    // position: absolute;
    bottom: 15px;
    display: flex;
`;
const BubbleCircle = styled['div']<{ active?: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background-color: ${props => props.className?.includes('active-circle') ? 'var(--Success)' : 'var(--Gray-200)'};
    transition: width 0.2s ease-in, background-color 0.2s ease-in;

    &.active-circle {
        width: 23px;
    }
`;

const Tracker: FC<ITracker> = ({ items = [], index = 0 }) => {
    const bubbleCircleRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [mounted, setMounted] = useState<boolean>(false);
    const [previousIndex, setPreviousIndex] = useState<number>(index);

    useEffect(() => {
        // Este código será executado após a montagem do componente
        if (mounted) {
            // O componente está sendo remontado
            if (bubbleCircleRefs.current[previousIndex]) {
                bubbleCircleRefs.current[previousIndex]?.classList.remove('active-circle');
            }
            if (bubbleCircleRefs.current[index]) {
                bubbleCircleRefs.current[index]?.classList.add('active-circle');
            }
            setPreviousIndex(index);
        } else {
            // O componente está sendo montado pela primeira vez
            if (bubbleCircleRefs.current[index]) {
                bubbleCircleRefs.current[index]?.classList.add('active-circle');
            }
            setMounted(true);
        }
    }, [index, mounted, previousIndex]);

    return (
        <TrackerContainer>
            {items.map((_, i) => (
                <BubbleCircle
                    key={uuid()}
                    ref={el => bubbleCircleRefs.current[i] = el}
                    data-index={i}
                    className={i === index ? "active-circle" : ""}
                />
            ))}
        </TrackerContainer>
    );
};

export default Tracker;
