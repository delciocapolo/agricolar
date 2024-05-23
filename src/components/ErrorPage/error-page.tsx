import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError() as {
    statusText: string | undefined | null;
    message: string | undefined | null;
  };
  const HomeLink = styled(Link)`
    background-color: var(--Success-Dark);
    border-radius: var(--border-radius);
    padding: 8px 10px;
  `;
  const ContainerErrorPage = styled["div"]`
    flex-direction: column;
  `;

  return (
    <ContainerErrorPage id="error-page" className="d-flex">
      <h1>Hum!</h1>
      <p>
        <i>Parece que esta página, ainda está sendo construída.</i>
      </p>
      <HomeLink to="/">Voltar para Home</HomeLink>
    </ContainerErrorPage>
  );
}
