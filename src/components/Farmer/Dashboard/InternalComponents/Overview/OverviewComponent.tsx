import AnalyticsOverviewComponent from "./BaseComponent/AnalyticOverview";
import { ContainerOverview } from "./BaseComponent/BaseOverviewComponent";
import ChartSalesMethodComponent from "./BaseComponent/ChartSalesMethod";
import FilterOverviewComponent from "./BaseComponent/FilterOverview";

export default function OverviewComponent() {
  return (
    <ContainerOverview className="d-flex">
      <FilterOverviewComponent />
      <AnalyticsOverviewComponent />
      <ChartSalesMethodComponent />
    </ContainerOverview>
  );
}
