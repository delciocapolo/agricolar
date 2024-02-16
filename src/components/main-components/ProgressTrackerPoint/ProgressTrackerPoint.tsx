import { Check } from "lucide-react";
import { FC, useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';

export interface IProgressTrackerPoint {
    numberSteps?: number | string;
    statusPoint: statusPoint;
}

type statusPoint = 'initial-point' | 'mid-point' | 'done-point';

interface II {
    tracker: Array<IProgressTrackerPoint>
}

const changeProgressPoint = (status: statusPoint = 'initial-point', progressive:boolean = true, setState: IProgressTrackerPoint) => {
    if(status === 'initial-point' && progressive) {
        setState.statusPoint = 'mid-point';
        return;
    }
    if(status === 'mid-point' && progressive) {
        setState.statusPoint = 'done-point';
        return
    }
    
    if(status === 'done-point' && !progressive) {
        setState.statusPoint = 'mid-point';
        return;
    }
    if(status === 'mid-point' && !progressive) {
        setState.statusPoint = 'initial-point';
        return
    }
}

const ProgressTrackerPoint:FC<II> = ({tracker}) => {
    const [stepNumber, setStepNumber] = useState<number>(0);
    const size = 23;

    useEffect(() => {
        if(stepNumber < 0) {
            setStepNumber(step => step + 1);
        }
        if(stepNumber > tracker.length) {
            setStepNumber(step => step - 1);
        }
    }, [stepNumber]);

    return (
        <>
            <div className="container-progress-tracker-point d-flex">
                <ProgressTrackerPoints tracker={tracker} size={size}/>
            </div>
            <div className="d-flex">
                <button type="button" onClick={() => {
                    setStepNumber(step => step + 1);
                    console.log()
                    // changeProgressPoint(tracker[stepNumber].statusPoint, true, tracker[stepNumber]);
                }}>Avancar</button>
                <button type="button" onClick={() => {
                    setStepNumber(step => step - 1);
                    // changeProgressPoint(tracker[stepNumber].statusPoint, false, tracker[stepNumber]);
                }}>Recuar</button>
            </div>
        </>
    )
}

const ProgressTrackerPoints:FC<II & {size: number}> = ({tracker, size=20}) => {
    return (
        <nav className="container-tracker d-flex">
            {
                tracker.map(({statusPoint}, index) => (
                    <div className="container-progress-point d-flex" key={uuid()}>
                        <span className={`progress-point ${statusPoint} d-flex`}>
                            { statusPoint === 'done-point' && <Check size={size} style={{color: 'var(--White)'}} absoluteStrokeWidth={true} /> }
                            { statusPoint !== 'done-point' && (index+1) }
                        </span>
                        { ((index+1) !== tracker.length) && <div className="line-progress-tracker"></div> }
                    </div>
                ))
            }
        </nav>
    )
}

export default ProgressTrackerPoint;