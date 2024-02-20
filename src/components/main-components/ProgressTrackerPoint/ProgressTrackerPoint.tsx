import { FC, useState } from "react";
import { Check } from "lucide-react";
import { v4 as uuid } from 'uuid';
import { II, IProgressTrackerPoint } from "./interfaces/interfaces";

const ProgressTrackerPoint: FC<II> = ({ TRACKER }) => {
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [tracker, setTracker] = useState<IProgressTrackerPoint[]>(TRACKER);
    const size = 23;

    const handleNext = () => {
        setStepNumber(prevStepNumber => {
            const nextStep = prevStepNumber + 1;
            if (nextStep >= tracker.length) return prevStepNumber;

            const updatedTracker: IProgressTrackerPoint[] = tracker.map((point, index, arr) => {
                if (index === nextStep) {
                    if (point.statusPoint === 'initial-point') {
                        arr[prevStepNumber].statusPoint = 'done-point';
                        return { ...point, statusPoint: 'mid-point' };
                    } else if (point.statusPoint === 'mid-point') {
                        return { ...point, statusPoint: 'done-point' };
                    }
                }
                return point;
            });
            setTracker(updatedTracker);
            return nextStep;
        });
    };

    const handleBack = () => {
        setStepNumber(prevStepNumber => {
            const nextStep = prevStepNumber - 1;
            if (nextStep < 0) return prevStepNumber;

            const updatedTracker: IProgressTrackerPoint[] = tracker.map((point, index) => {
                if (index === prevStepNumber) {
                    if (tracker[nextStep].statusPoint === 'done-point') {
                        tracker[nextStep].statusPoint = 'mid-point';
                    }
                    if (point.statusPoint === 'done-point') {
                        return { ...point, statusPoint: 'mid-point' };
                    }
                    if (point.statusPoint === 'mid-point') {
                        return { ...point, statusPoint: 'initial-point' };
                    }
                }
                return point;
            });
            setTracker(updatedTracker);
            return nextStep;
        });
    };

    return (
        <div className="container-progress d-flex">
            <div className="container-progress-tracker-point d-flex">
                <ProgressTrackerPoints TRACKER={tracker} size={size} />
            </div>
            {tracker[stepNumber].frame}
            <div className="container-btn-progress d-flex">
                <button
                    className="btn-point btn-back-point"
                    type="button"
                    onClick={handleBack}
                    disabled={stepNumber <= 0}
                >
                    Recuar
                </button>
                <button
                    className="btn-point btn-next-point"
                    type="button"
                    onClick={handleNext}
                    disabled={stepNumber >= tracker.length - 1}
                >
                    Avançar
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
