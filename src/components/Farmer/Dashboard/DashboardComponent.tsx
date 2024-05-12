import { FcFilingCabinet, FcBullish } from "react-icons/fc";
import {
  DashboardSquare01Icon,
  ChartRelationshipIcon,
  WaterfallDown01Icon,
  AnalyticsUpIcon,
  Calendar04Icon,
  Chatting01Icon,
  Settings01Icon,
  Notification02Icon,
} from "hugeicons-react";
import { TableProperties, Phone } from "lucide-react";
import {
  Container,
  Sidebar,
  ContainerOverview,
  CardSidebar,
  ItemCardSidebar,
  ItemNavbar,
  Navbar,
  TitleItemNavbar,
  SearchBar,
  ContainerSettings,
  SubcontainerSettings,
  ItemSettings,
  LinkSettings,
  ContainerListSettings,
  HeaderOverviewText,
  SubitemNavbar,
  Subtitle,
  FilterOverview,
} from "./InternalComponents/BaseDefaultDashboard";

const DashboardComponent = () => {
  const iconSidebarProps = {
    size: 22,
    color: "#979595",
    strokeWidth: 1.9,
  };
  return (
    <Container className="d-flex">
      <Sidebar>
        <CardSidebar>
          <ItemCardSidebar
            className="d-flex"
            icon={<FcFilingCabinet size={28} />}
            content={<HeaderOverviewText>Dashboard</HeaderOverviewText>}
          />
        </CardSidebar>

        <CardSidebar>
          <ItemCardSidebar
            icon={<DashboardSquare01Icon {...iconSidebarProps} />}
            content="visão geral"
          />
          <ItemCardSidebar
            icon={<ChartRelationshipIcon {...iconSidebarProps} />}
            content="colaboradores"
          />
          <ItemCardSidebar
            icon={<TableProperties {...iconSidebarProps} />}
            content="folha de orçamento"
          />
          <ItemCardSidebar
            icon={<WaterfallDown01Icon {...iconSidebarProps} />}
            content="estatisticas"
          />
          <ItemCardSidebar
            icon={<AnalyticsUpIcon {...iconSidebarProps} />}
            content="vendas"
          />
          {/* vendas -> produtos */}
          {/* vendas -> pedidos */}
          <ItemCardSidebar
            icon={<Calendar04Icon {...iconSidebarProps} />}
            content="agendamentos"
          />
        </CardSidebar>

        <CardSidebar>
          <Subtitle>Equipas</Subtitle>
        </CardSidebar>

        <CardSidebar>
          <ItemCardSidebar
            icon={<Chatting01Icon {...iconSidebarProps} />}
            content="mensagem"
            custom={<span>2</span>}
          />
          <ItemCardSidebar
            icon={<Phone {...iconSidebarProps} />}
            content="suporte"
          />
        </CardSidebar>
      </Sidebar>
      <ContainerOverview>
        <ContainerListSettings className="d-flex">
          <Navbar className="d-flex">
            <ItemNavbar>
              <SubitemNavbar className="d-flex">
                <FcBullish size={28} />
                <TitleItemNavbar>visão geral</TitleItemNavbar>
              </SubitemNavbar>
            </ItemNavbar>
            <ItemNavbar className="d-flex">
              <SearchBar />
            </ItemNavbar>
            <ItemNavbar className="d-flex">
              <ContainerSettings className="d-flex">
                <SubcontainerSettings className="d-flex">
                  <ItemSettings>
                    <LinkSettings className="d-flex" to="/dashboard">
                      <Notification02Icon {...iconSidebarProps} />
                    </LinkSettings>
                  </ItemSettings>
                  <ItemSettings>
                    <LinkSettings className="d-flex" to="/dashboard">
                      <Settings01Icon {...iconSidebarProps} />
                    </LinkSettings>
                  </ItemSettings>
                  <ItemSettings>
                    <LinkSettings className="d-flex" to="/dashboard">
                      <Settings01Icon {...iconSidebarProps} />
                    </LinkSettings>
                  </ItemSettings>
                </SubcontainerSettings>
              </ContainerSettings>
            </ItemNavbar>
          </Navbar>
          <FilterOverview />
        </ContainerListSettings>
      </ContainerOverview>
    </Container>
  );
};

export default DashboardComponent;
