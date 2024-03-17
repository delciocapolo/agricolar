
import styled from "@emotion/styled";
import Header from "../Header/Header";
import BG from "../BG/BG";
import { PaddingProvider } from "../contexts/padding";
import Banners from "../main-components/Banners/Banners";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Testimonies from "../Testimonies/Testimonies";
import Blog from "../Blog/Blog";
import FillVoidSpace from "../main-components/FillVoidSpaceContainer/FillVoidSpaceContainer";

const SkeletonContainer = styled['main']``;

const Skeleton = () => {
    return (
        <PaddingProvider>
            <SkeletonContainer>
                <Header />
                <BG />
                <Banners />
                <FeaturedProducts />
                <Testimonies />
                <Blog />
                <FillVoidSpace />
            </SkeletonContainer>
        </PaddingProvider>
    )
};

export default Skeleton;