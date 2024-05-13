import {
  ApexAxisChartSeriesType,
  MarksType,
} from "../../../Charts/@types/ChartType";
import LineChart from "../../../Charts/Line";
import { ContainerAnalyticComponent } from "./BaseOverviewComponent";

function randomDataset() {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    const arrTemp = [];
    for (let j = 0; j < 10; j++) {
      const random = Math.round(Math.random() * 40);
      arrTemp.push(random);
    }
    arr.push(arrTemp);
  }
  return arr;
}

const colors = ["#00AFB9", "#F79D65"];
const arr: MarksType[] = [
  {
    color: colors[0],
    content: "marketing",
  },
  {
    color: colors[1],
    content: "Dor-to-Dor",
  },
];

const datas: ApexAxisChartSeriesType = [
  {
    name: "Markting",
    data: randomDataset(),
  },
  {
    name: "Dor-to-Dor",
    data: randomDataset(),
  },
];

export default function ChartSalesMethodComponent() {
  return (
    <ContainerAnalyticComponent content="gráfico de vendas" marks={arr}>
      <LineChart colors={colors} series={datas} />
      {/* <LineChart colors={colors} series={datas} /> */}
    </ContainerAnalyticComponent>
  );
}
