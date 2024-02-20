import { JSX } from 'react';

export type statusPoint = 'initial-point' | 'mid-point' | 'done-point';

export interface IProgressTrackerPoint {
	frame: JSX.Element;
	statusPoint: statusPoint;
}

export interface II {
	TRACKER: Array<IProgressTrackerPoint>;
}
