import { FC } from "react";
import styled from "styled-components";
import { MarksType } from "../../../Charts/@types/ChartType";

export const ContainerOverview = styled["div"]`
  width: 100%;
  // background-color: rgb(248, 248, 248);
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8em;
  align-items: flex-start;
`;

interface IContainerAnalyticComponent {
  content?: string;
  children?: JSX.Element | JSX.Element[];
  marks?: MarksType[];
}
export const ContainerAnalyticComponent: FC<IContainerAnalyticComponent> = ({
  content,
  children,
  marks,
}) => {
  const ContainerAnalyticsOverview = styled["div"]`
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    background-color: rgb(248, 248, 248);
    // padding: 1.75rem 1.5rem;
    // padding: 1.7rem 0 1.7rem 1.5rem;
    padding: 1.7rem 0.5rem 1.7rem 1.5rem;
    gap: 1.5em;
    border-radius: 20px 0 0 20px;
  `;
  const TitleAnalyticsOverview = styled["h1"]`
    font: var(--Body-Medium-600);
  `;
  const ContainerContentChart = styled["div"]`
    width: 100%;
    justify-content: space-between;
  `;
  const ContainerPoints = styled["div"]``;
  const ContainerPoint = styled["div"]`
    background-color: var(--White);
    padding: 8px 11px;
    border-radius: var(--border-radius);
  `;
  const Point = styled["span"]`
    width: 11px;
    height: 11px;
    background-color: var(--Success-Dark);
    border-radius: 50px;
  `;
  const ContentPoint = styled["span"]`
    font: var(--Body-Medium-500);
  `;

  return (
    <ContainerAnalyticsOverview className="d-flex">
      {marks && (
        <ContainerContentChart className="d-flex">
          <TitleAnalyticsOverview>{content}</TitleAnalyticsOverview>
          <ContainerPoints className="d-flex">
            {marks.map((mark) => (
              <ContainerPoint className="d-flex">
                <Point style={{ backgroundColor: mark.color }} />
                <ContentPoint>{mark.content}</ContentPoint>
              </ContainerPoint>
            ))}
          </ContainerPoints>
        </ContainerContentChart>
      )}
      {!marks && <TitleAnalyticsOverview>{content}</TitleAnalyticsOverview>}
      {Array.isArray(children) ? children.map((child) => child) : children}
    </ContainerAnalyticsOverview>
  );
};
