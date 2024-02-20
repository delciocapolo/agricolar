import { FC, useState } from "react";
import { Check } from "lucide-react";
import { v4 as uuid } from 'uuid';
import { II, IProgressTrackerPoint } from "./interfaces/interfaces";

const ProgressTrackerPoint: FC<II> = ({ TRACKER }) => {
    const [stepNumber, setStepNumber] = useState<number>(0);
    const size = 23;
    const [tracker, setTracker] = useState(TRACKER);

    return (
        <div className="container-progress d-flex">
            <div className="container-progress-tracker-point d-flex">
                <ProgressTrackerPoints TRACKER={tracker} size={size} />
            </div>
            {tracker[stepNumber].frame}
            <div className="container-btn-progress d-flex">
                <button
                    className="btn-point btn-next-point"
                    type="button"
                    onClick={() => {
                        setStepNumber(prevStepNumber => {
                            const nextStep = prevStepNumber + 1;
                            if (nextStep >= tracker.length) {
                                return prevStepNumber;
                            } else {
                                const updatedTracker = tracker.map((point, index) => {
                                    if (index === nextStep) {
                                        if (point.statusPoint === 'initial-point') {
                                            return { ...point, statusPoint: 'mid-point' };
                                        } else if (point.statusPoint === 'mid-point') {
                                            return { ...point, statusPoint: 'done-point' };
                                        }
                                    }
                                    return point;
                                }) as IProgressTrackerPoint[];
                                setTracker(updatedTracker);
                                return nextStep;
                            }
                        });
                    }}
                >
                    Avançar
                </button>
                <button
                    className="btn-point btn-back-point"
                    type="button"
                    onClick={() => {
                        setStepNumber(prevStepNumber => {
                            const nextStep = prevStepNumber - 1;
                            if (nextStep < 0) {
                                return prevStepNumber;
                            } else {
                                const updatedTracker = tracker.map((point, index) => {
                                    if (index === prevStepNumber) {
                                        if (point.statusPoint === 'done-point') {
                                            return { ...point, statusPoint: 'mid-point' };
                                        } else if (point.statusPoint === 'mid-point') {
                                            return { ...point, statusPoint: 'initial-point' };
                                        }
                                    }
                                    return point;
                                }) as IProgressTrackerPoint[];
                                setTracker(updatedTracker);
                                return nextStep;
                            }
                        });
                    }}
                >
                    Recuar
                </button>
            </div>
        </div>
    );
};

const ProgressTrackerPoints: FC<II & { size: number }> = ({ TRACKER, size }) => {
    return (
        <nav className="container-tracker d-flex">
            {TRACKER.map(({ statusPoint }, index) => (
                <div className="container-progress-point d-flex" key={uuid()}>
                    <span className={`progress-point ${statusPoint} d-flex`}>
                        {statusPoint === 'done-point' && <Check size={size} style={{ color: 'var(--White)' }} absoluteStrokeWidth={true} />}
                        {statusPoint !== 'done-point' && (index + 1)}
                    </span>
                    {(index + 1) !== TRACKER.length && <div className="line-progress-tracker"></div>}
                </div>
            ))}
        </nav>
    );
};

export default ProgressTrackerPoint;
