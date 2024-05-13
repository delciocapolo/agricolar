import { FC, JSX } from "react";
import { Download04Icon } from "hugeicons-react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Link } from "react-router-dom";

// props
const iconNavbarProps = {
  size: 21,
  strokeWidth: 2.1,
};

export const TitleSortContainer = styled["label"]`
  font: var(--Body-Medium-500);
  font-size: 0.85rem;
  color: rgba(151, 149, 149, 0.8);
`;
export const SelectFilter = styled["select"]`
  padding: 10px;
  border: none;
  background-color: transparent;
  border-radius: var(--border-radius);
  font: var(--Body-Tiny-600);
  cursor: pointer;
`;
export const OptionFilter = styled["option"]``;

// container filter
interface IFilterOverview {
  children?: JSX.Element;
}
export const FilterOverview: FC<IFilterOverview> = ({ children }) => {
  const ContainerFilterOverview = styled["div"]`
    width: 100%;
    height: 50px;
    padding: 0 0.5rem 0 0;
    justify-content: space-between;
    // background-color: red;
  `;
  const ContainerButtons = styled["nav"]``;
  const ButtonDownloadReport = styled(Link)`
    background-color: var(--Success);
    font: var(--Body-Medium-500);
    font-size: 0.85rem;
    border-radius: var(--border-radius);
    padding: 10px 20px;
  `;
  return (
    <ContainerFilterOverview className="d-flex">
      {children && children}
      <ContainerButtons>
        <ButtonDownloadReport to="/dashboard" download={""} className="d-flex">
          <Download04Icon {...iconNavbarProps} />
          gerar relatório
        </ButtonDownloadReport>
      </ContainerButtons>
    </ContainerFilterOverview>
  );
};

// Main Component
export default function FilterOverviewComponent() {
  return (
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
        <SelectFilter
          name="filter"
          id="filter-by-dashboard-overview"
          defaultValue="this_year"
        >
          <OptionFilter value="this_year">este ano</OptionFilter>
          <OptionFilter value="2023">Ano passado</OptionFilter>
        </SelectFilter>
      </Box>
    </FilterOverview>
  );
}
