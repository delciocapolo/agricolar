import { Check } from "lucide-react";
import { FC, useEffect, useState, JSX } from "react";
import {v4 as uuid} from 'uuid';

export interface IProgressTrackerPoint {
    numberSteps?: number | string;
    statusPoint: statusPoint;
}

interface II {
    tracker: Array<IProgressTrackerPoint>;
    children: JSX.Element;
}

const changeProgressPoint = (point: IProgressTrackerPoint, progressive:boolean = true) => {
    const {statusPoint: status} = point;
    
    if(status === 'initial-point' && progressive) {
        point.statusPoint = 'mid-point';
        return;
    }
    /* if(status === 'mid-point' && progressive) {
        point.statusPoint = 'done-point';
        return
    }
    
    if(status === 'done-point' && !progressive) {
        point.statusPoint = 'mid-point';
        return;
        } */

    if(status === 'mid-point' && !progressive) {
        point.statusPoint = 'initial-point';
        return
    }
}

const ProgressTrackerPoint:FC<II> = ({tracker, children}) => {
    const [stepNumber, setStepNumber] = useState<number>(0);
    const size = 23;

    useEffect(() => {
        if(stepNumber < 0) {
            setStepNumber(step => step + 1);
        }
        if(stepNumber >= tracker.length) {
            setStepNumber(step => step - 1);
        }

    }, [stepNumber]);

    return (
        <div className="container-progress d-flex">
            <div className="container-progress-tracker-point d-flex">
                <ProgressTrackerPoints tracker={tracker} size={size}/>
            </div>
            {
                children
            }
            <div className="container-btn-progress d-flex">
                <button className="btn-point btn-next-point" type="button" onClick={() => {
                    changeProgressPoint(tracker[stepNumber], true);
                    setStepNumber(step => step + 1);
                }}>Avançar</button>
                <button className="btn-point btn-back-point" type="button" onClick={() => {
                    changeProgressPoint(tracker[stepNumber], false);
                    setStepNumber(step => step - 1);
                }}>Recuar</button>
            </div>
        </div>
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
