import React, { useState } from "react";
import { FcFilingCabinet, FcBullish } from "react-icons/fc";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
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
  TitleSortContainer,
  SelectFilter,
  OptionFilter,
} from "./InternalComponents/BaseDefaultDashboard";
// for the filter component
import Box from "@mui/material/Box";

const DashboardComponent = () => {
  const iconSidebarProps = {
    size: 20,
    color: "rgb(151, 149, 149)",
    strokeWidth: 1.9,
  };
  return (
    <Container className="d-flex">
      <Sidebar>
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
          <FilterOverview>
            <Box
              display="flex"
              gap={2}
              alignItems="center"
              sx={{
                minWidth: 120,
                backgroundColor: "rgb(248, 248, 248)",
                borderRadius: 50,
                padding: "0.1rem 1.1rem",
              }}
            >
              <TitleSortContainer htmlFor="filter-by-dashboard-overview">
                mostrar:
              </TitleSortContainer>
              <SelectFilter name="filter" id="filter-by-dashboard-overview">
                <OptionFilter selected value="this_year">
                  este ano
                </OptionFilter>
                <OptionFilter value="2023">Ano passado</OptionFilter>
              </SelectFilter>
            </Box>
          </FilterOverview>
        </ContainerListSettings>
      </ContainerOverview>
    </Container>
  );
};

export default DashboardComponent;
