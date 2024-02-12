import { v4 as uuidv4 } from "uuid";
import { Star } from "lucide-react";
import { FC } from "react";

interface IRating {
    ratingNumber: number;
    sizeStar?: number;
}

const Rating:FC<IRating> = ({ratingNumber, sizeStar=15}) => {
    const items = [];
    for (
        let index = 1; 
        (ratingNumber >= 0 && ratingNumber <= 5) && index <= ratingNumber; 
        index++) {
            items.push(<Star style={{fill: "var(--Warning)", color: "transparent"}} size={sizeStar} key={uuidv4()} />)
            for(let rest = 1; rest <= (5 - ratingNumber) && (index === ratingNumber); rest++) {
            items.push(<Star style={{fill: "var(--Gray-200)", color: "transparent"}} size={sizeStar} key={uuidv4()} />)
            }
    }
    return (
        <div className="container-rating d-flex">
            {
                items
            }
        </div>
    )
}

export default Rating;