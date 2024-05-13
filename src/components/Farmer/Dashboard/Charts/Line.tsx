import { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { ChartType } from "./@types/ChartType";

export default function LineChart({ series, colors }: ChartType) {
  const labelsAxisProps = {
    style: {
      fontFamily: "Poppins-medium",
      fontSize: "0.78rem",
      colors: "#b5b5b5",
    },
  };
  const [state] = useState({
    options: {
      chart: {
        id: "line-chart",
      },
      grid: {
        show: true,
        borderColor: "#f3f3f3",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        strokeDashArray: 0, // criar divisoes entre as linhas da grid
      },
      // title: { text: "Grafico de dados chart" },
      legend: {
        show: false,
        position: "right",
        fontFamily: "Poppins-medium",
        // fontSize: "14px",
      },
      stroke: {
        curve: "smooth",
      },
      colors: colors, //["#F4AC45", "var(--Success-Dark)"],
      xaxis: {
        categories: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        type: "category",
        labels: { ...labelsAxisProps },
      },
      yaxis: {
        labels: { ...labelsAxisProps },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        strokeWidth: 6,
        hover: {
          size: 10,
        },
      },
    },
    series,
  });
  const CharContainer = styled["div"]`
    width: 100%;
    min-height: 350px;
    padding: 0.8rem 0;
    border-radius: var(--border-radius);
    background-color: var(--White);
  `;
  return (
    <CharContainer>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
        height="100%"
      />
    </CharContainer>
  );
}
