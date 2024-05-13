export type ApexAxisChartSeriesType = {
  name?: string;
  type?: string;
  color?: string;
  group?: string;
  zIndex?: number;
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fill?: ApexFill;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
        barHeightOffset?: number;
        columnWidthOffset?: number;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][]
    | number[][];
}[];

export type ChartType = {
  series?: ApexAxisChartSeriesType;
  colors?: string[];
};

export type MarksType = {
  color: string;
  content: string;
};
