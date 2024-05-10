import styled from "@emotion/styled";
import { FC } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const ContainerDivSpinner = styled['div']`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
`;

const Spinner: FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <ContainerDivSpinner className="d-flex">
            <PuffLoader
                color='var(--Success)'
                loading={loading}
                // cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </ContainerDivSpinner>
    )
};

export default Spinner;