import styled from "@emotion/styled";
import Header from "../Header/Header";

const SkeletonContainer = styled['main']``;

const Skeleton = () => {
    return (
        <SkeletonContainer>
            <Header />
        </SkeletonContainer>
    )
};

export default Skeleton;