import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import {
  AnalyticsUpIcon,
  Calendar04Icon,
  ChartRelationshipIcon,
  Chatting01Icon,
  DashboardSquare01Icon,
  Notification02Icon,
  Settings01Icon,
  WaterfallDown01Icon,
} from "hugeicons-react";
import { Phone, TableProperties } from "lucide-react";
import { FcBullish, FcFilingCabinet } from "react-icons/fc";
import {
  CardSidebar,
  Container,
  ContainerListSettings,
  ContainerOverview,
  ContainerSettings,
  HeaderOverviewText,
  ItemCardSidebar,
  ItemNavbar,
  ItemSettings,
  LinkSettings,
  Navbar,
  SearchBar,
  Sidebar,
  FixedSidebar,
  SubcontainerSettings,
  SubitemNavbar,
  Subtitle,
  TitleItemNavbar,
} from "./InternalComponents/BaseDefaultDashboard";
import OverviewComponent from "./InternalComponents/Overview/OverviewComponent";

const DashboardComponent = () => {
  const iconSidebarProps = {
    size: 20,
    color: "rgb(151, 149, 149)",
    strokeWidth: 1.9,
  };
  return (
    <Container className="d-flex">
      <Sidebar>
        <FixedSidebar>
          <CardSidebar>
            <ItemCardSidebar
              className="d-flex"
              icon={<FcFilingCabinet size={28} />}
              elementContent={<HeaderOverviewText>Dashboard</HeaderOverviewText>}
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
        </FixedSidebar>
      </Sidebar>
      <ContainerOverview>
        <ContainerListSettings>
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
                      <Badge badgeContent={10} max={99}>
                        <Notification02Icon {...iconSidebarProps} />
                      </Badge>
                    </LinkSettings>
                  </ItemSettings>

                  <ItemSettings>
                    <LinkSettings className="d-flex" to="/dashboard">
                      <Settings01Icon {...iconSidebarProps} />
                    </LinkSettings>
                  </ItemSettings>

                  <ItemSettings>
                    <LinkSettings className="d-flex" to="/dashboard">
                      <Avatar
                        alt="Delcio Capolo"
                        src="https://randomuser.me/api/portraits/med/men/75.jpg"
                        sx={{ width: 35, height: 35 }}
                      />
                    </LinkSettings>
                  </ItemSettings>
                </SubcontainerSettings>
              </ContainerSettings>
            </ItemNavbar>
          </Navbar>
        </ContainerListSettings>
        <OverviewComponent />
      </ContainerOverview>
    </Container>
  );
};

export default DashboardComponent;
