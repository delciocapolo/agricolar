import { Search01Icon } from "hugeicons-react";
import React, { FC, JSX } from "react";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";

const heightSearch_Bar = "50px";
export const Container = styled["section"]`
  width: 100%;
  background-color: yellow;
  gap: 0;
  align-items: flex-start;
  // padding: 0 0.5rem;
`;

export const ContainerSides = styled["article"]`
  min-height: 100vh;
`;

export const Sidebar = styled(ContainerSides)`
  flex: 1 1 200px;
  // padding: 0.5rem;
`;

export const FixedSidebar = styled["div"]`
  width: 254px;
  height: 100%;
  background-color: var(--White);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

export const CardSidebar = styled["ul"]`
  display: block;
  margin: 0 0 10px 0;

  // background-color: red;
  width: 100%;
  padding: 0.5rem;

  &:first-of-type {
    margin: 0 0 1em 0;
  }
`;

interface ItemCardSidebarType extends React.HTMLAttributes<HTMLElement> {
  icon: JSX.Element;
  content?: string;
  custom?: JSX.Element;
  elementContent?: JSX.Element;
}
export const ItemCardSidebar: FC<ItemCardSidebarType> = ({
  icon,
  content,
  custom,
  elementContent,
  ...props
}) => {
  const ItemCardSidebarContainer = styled["li"]`
    justify-content: flex-start;
    // align-items: flex-start;
    // background-color: purple;
    margin: 0 0 0.3rem 0;
    gap: 5px;
    border-radius: var(--border-radius);

    &:first-of-type {
      align-items: center;
      height: ${heightSearch_Bar};
    }

    &:hover {
      background-color: var(--Green-50);

      & > a {
        & > div {
          &:has(span) {
            & > span,
            svg {
              color: var(--Success);
              stroke: var(--Success);
            }
          }
        }
      }
    }
  `;
  const LinkItemSidebar = styled(Link)`
    width: calc(100% - 20px);
    padding: 0 0.3rem;
    // background-color: purple;
    justify-content: space-between;
  `;
  const ContentItem = styled["span"]`
    font: var(--Body-Medium-600);
    line-height: 3.7;
    color: var(--Gray-900);
    font-size: 0.88rem;
  `;
  const MainContentItemSidebar = styled["div"]``;
  return (
    <ItemCardSidebarContainer {...props}>
      <LinkItemSidebar to="" className="d-flex">
        <MainContentItemSidebar className="d-flex">
          {icon}
          <ContentItem>{!content ? elementContent : content}</ContentItem>
        </MainContentItemSidebar>
        {custom}
      </LinkItemSidebar>
    </ItemCardSidebarContainer>
  );
};

// ContainerOverview
export const ContainerOverview = styled(ContainerSides)`
  flex: 15 1 360px;
  // padding: 0 0.5rem;
  background-color: var(--White);
`;

export const Headers = styled["header"]`
  width: 100%;
`;

export const Navbar = styled(Headers)`
  // background-color: orange;
  gap: 5px;
  padding: 0.5rem 0;
`;
export const BaseItemNavbar = styled["div"]`
  flex: 1 1 200px;

  &:first-of-type {
    justify-content: flex-start;
  }
  &:last-of-type {
    justify-content: flex-end;
  }
`;

export const ItemNavbar = styled(BaseItemNavbar)``;
export const SubitemNavbar = styled["div"]`
  width: fit-content;
`;
export const TitleItemNavbar = styled["h1"]`
  font: var(--Body-Large-600);
`;
export const SearchBar = () => {
  const ContainerSearchBar = styled(Form)`
    min-width: 100%;
  `;
  const SubcontainerForm = styled["div"]`
    width: 230px;
    height: fit-content;
    background-color: rgb(248, 248, 248);
    gap: 0;
    justify-content: space-between;
    border-radius: var(--border-radius);
    box-shadow:
      0 0 2px 1px rgba(51, 51, 51, 0.1),
      0px 0px 10px 1px rgba(51, 51, 51, 0.02);
  `;
  const Search = styled["input"]`
    width: calc(100% - 40px);
    height: ${heightSearch_Bar};
    padding: 0 0.7rem;

    font: var(--Body-Tiny-400);
    // border-radius: var(--border-radius);
    background-color: transparent;
    border: none;
  `;
  const ButtonSearch = styled["button"]`
    width: 40px;
    height: ${heightSearch_Bar};
    background-color: transparent;
  `;
  return (
    <ContainerSearchBar className="d-flex">
      <SubcontainerForm className="d-flex">
        <Search type="search" placeholder="pesquisar..." name="search" />
        <ButtonSearch type="submit" className="d-flex">
          <Search01Icon size={20} strokeWidth={1.8} color="#979595" />
        </ButtonSearch>
      </SubcontainerForm>
    </ContainerSearchBar>
  );
};

export const ContainerSettings = styled["div"]`
  width: 100%;
  // background-color: red;
  justify-content: flex-end;
`;

export const SubcontainerSettings = styled["ul"]`
  width: calc(100% - 195px);
  justify-content: space-between;
  // background-color: pink;
  // padding: 0 0.3rem;
  gap: 5px;
`;

export const ItemSettings = styled["li"]`
  flex: 1 1 45px;

  &:first-of-type {
    position: relative;
  }
`;

export const LinkSettings = styled(Link)`
  // background-color: red;
  padding: 0.5rem 0;

  & > .MuiBadge-root > .MuiBadge-badge {
    background-color: var(--Success);
  }
`;

export const ContainerListSettings = styled["nav"]`
  width: 100%;
  // background-color: red;
  margin: 0 0 1.2em 0;
`;

export const HeaderOverviewText = styled["h1"]`
  font: var(--Body-XL-600);
`;

export const Subtitle = styled["h1"]`
  font: var(--Body-XL-500);
  color: #b5b5b5;
`;
