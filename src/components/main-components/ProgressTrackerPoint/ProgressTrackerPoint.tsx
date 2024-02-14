import { Check } from "lucide-react";
import { FC, useState, SetStateAction, Dispatch } from "react";



interface IProgressTrackerPoint {
    numberSteps: number;
    statusPoint: string;
}

type statusPoint = 'initial-point' | 'mid-point' | 'done-point'
type progressive = boolean;

const changeProgressPoint = (status: statusPoint = 'initial-point', progressive: progressive = true ,setState: Dispatch<SetStateAction<statusPoint>>) => {
    if(status === 'initial-point' && progressive) {
        setState('mid-point');
        return;
    }
    if(status === 'mid-point' && progressive) {
        setState('done-point');
        return
    }
    
    if(status === 'done-point' && !progressive) {
        setState('mid-point');
        return;
    }
    if(status === 'mid-point' && !progressive) {
        setState('initial-point');
        return
    }
}

const ProgressTrackerPoint = () => {
    const size = 15;

    return (
        <div className="container-progress-tracker-point d-flex">
            {/* {
                IProgressPoint.map(({numberSteps}) => )
            } */}
            <nav className="container-tracker d-flex">
                <div className="container-progress-point d-flex">
                    <span className="progress-point initial-point d-flex">1</span>
                    <div className="line-progress-tracker"></div>
                </div>
                <div className="container-progress-point d-flex">
                    <span className="progress-point mid-point d-flex">2</span>
                    <div className="line-progress-tracker"></div>
                </div>
            </nav>
            <span className="progress-point done-point d-flex">
                <Check size={size} style={{color: 'var(--White)'}} />
            </span>
        </div>
    )
}

export default ProgressTrackerPoint;