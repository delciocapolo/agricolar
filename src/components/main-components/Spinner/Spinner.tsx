import styled from "@emotion/styled";
import { CSSProperties, FC } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const override: CSSProperties = {
    // display: "block",
    // margin: "0 auto",
    // borderColor: "var(--Success)",
};

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