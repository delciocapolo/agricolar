import styled from "@emotion/styled";
import { FC } from "react";

interface ITracker {
    items?: any[];
    index?: number;
}

const TrackerContainer = styled['div']`
    gap: 5px;
`;
const BoubleCircle = styled['div']`
    &.active-circle {
        width: 25px;
        background-color: var(--Success);
    }

    width: 10px;
    height: 10px;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: var(--Gray-200);
`;


const Tracker: FC<ITracker> = ({ items = [], index = 0 }) => {
    return (
        <TrackerContainer className="d-flex">
            {
                items.map((item) => {
                    if (item[index]) {
                        return <BoubleCircle className="bouble-circle active-circle" />
                    }
                    return <BoubleCircle className="bouble-circle" />
                })
            }
        </TrackerContainer>
    )
};


export default Tracker;