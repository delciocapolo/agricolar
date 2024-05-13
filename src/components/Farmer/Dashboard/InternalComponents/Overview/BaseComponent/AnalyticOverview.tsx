import styled from "styled-components";
import { ContainerAnalyticComponent } from "./BaseOverviewComponent";
import { ArrowDown02Icon, ArrowUp02Icon } from "hugeicons-react";

const ListCardAnalyticsOverview = styled["nav"]`
  width: 100%;
  padding: 0 0 0 0.9rem;
`;
const CardAnalyticsOverview = styled["div"]`
  height: 180px;
  padding: 0.9rem;
  flex: 1 1 110px;
  flex-direction: column;
  background-color: var(--White);
  border-radius: var(--border-radius);
`;
const CardDetailsAnalytics = styled["div"]`
  display: block;
  // margin: 0 auto 7px auto;
  text-align: center;
`;
const SubTitleAnalytics = styled["h2"]`
  font: var(--Body-Medium-500);
  gap: 5px;

  &.growup {
    color: var(--Success-Dark);
  }
  &.declined {
    color: #cc504e;
  }
`;
const ContainerTitleAnalytics = styled["div"]`
  flex-direction: column;
  gap: 1px;
`;
const TitleAnalyticsCardDetails = styled["h1"]`
  font: var(--Body-XXL-600);
`;
const SubTitleAnalyticsCardDetails = styled["h2"]`
  font: var(--Body-Tiny-600);
  color: #b5b5b5;
`;
const ContainerTitlePerformanceSales = styled["div"]``;

export default function AnalyticsOverviewComponent() {
  const arrowProps = {
    size: 20,
  };
  return (
    <ContainerAnalyticComponent content="visão geral das análises">
      <ListCardAnalyticsOverview className="d-flex">
        {[0, 1, 2, 3].map((_, index) => (
          <CardAnalyticsOverview className="d-flex">
            <CardDetailsAnalytics>
              <SubTitleAnalytics>vendas</SubTitleAnalytics>
            </CardDetailsAnalytics>
            <CardDetailsAnalytics>
              <ContainerTitleAnalytics className="d-flex">
                <TitleAnalyticsCardDetails>kz 205k</TitleAnalyticsCardDetails>
                <SubTitleAnalyticsCardDetails>
                  (kz 132k - no ano passado)
                </SubTitleAnalyticsCardDetails>
              </ContainerTitleAnalytics>
            </CardDetailsAnalytics>
            <CardDetailsAnalytics>
              <ContainerTitlePerformanceSales>
                <SubTitleAnalytics
                  className={`d-flex ${index % 2 !== 0 ? "declined" : "growup"}`}
                >
                  {index % 2 !== 0 && (
                    <ArrowDown02Icon color="var(--Error)" {...arrowProps} />
                  )}
                  {index % 2 === 0 && (
                    <ArrowUp02Icon
                      color="var(--Success-Dark)"
                      {...arrowProps}
                    />
                  )}
                  105.23%
                </SubTitleAnalytics>
              </ContainerTitlePerformanceSales>
            </CardDetailsAnalytics>
          </CardAnalyticsOverview>
        ))}
      </ListCardAnalyticsOverview>
    </ContainerAnalyticComponent>
  );
}
