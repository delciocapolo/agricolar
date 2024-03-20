
import styled from "@emotion/styled";
import BG from "../BG/BG";
import Banners from "../main-components/Banners/Banners";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Testimonies from "../Testimonies/Testimonies";
import Blog from "../Blog/Blog";
import FillVoidSpace from "../main-components/FillVoidSpaceContainer/FillVoidSpaceContainer";
import NewsletterPopup from "../NewsletterPopup/NewsletterPopup";

const SkeletonContainer = styled['main']`
    width: 100%;
`;

const Skeleton = () => {
    return (
        <SkeletonContainer>
            <BG />
            <Banners />
            <FeaturedProducts />
            <Testimonies />
            <Blog />
            <FillVoidSpace className="blog-card" />
            {/* Newsletter popup */}
            <NewsletterPopup />
        </SkeletonContainer>
    )
};

export default Skeleton;