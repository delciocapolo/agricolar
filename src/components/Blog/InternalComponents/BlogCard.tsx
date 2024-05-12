import styled from "@emotion/styled";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { Link as BaseLink } from "react-router-dom";

interface IBlogCard {
  image?: {
    path: string;
  };
}

const BlogCard: FC<IBlogCard> = ({ image }) => {
  const BlogCardContainer = styled["div"]`
    min-height: 460px;
    padding: 1.1rem 1.3rem;
    border-radius: var(--border-radius);
    background-color: var(--White);

    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    transition: 0.1s ease-in;

    &:hover {
      box-shadow: var(--box-shadow-general);
    }
  `;
  const ImageContainer = styled["div"]`
    width: 100%;
    min-height: 255px;
    position: relative;
    // background-color: gray;
    padding: 0;
    border-radius: var(--border-radius);
  `;
  const Image = styled["img"]`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0;
    border-radius: var(--border-radius);
  `;
  const ContainerDate = styled["div"]`
    position: absolute;
    bottom: 7.5%;
    left: 7.5%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
    border-radius: var(--border-radius);
    width: 58px;
    height: 58px;

    flex-direction: column;
    gap: 0;
  `;
  const TitleDateBase = styled["h1"]`
    font: var(--Body-XL-500);
    color: var(--Gray-900);
  `;
  const TitleDate = styled(TitleDateBase)`
    font: var(--Small-Caps-Lock);
    color: var(--Gray-500);
    text-transform: uppercase;
  `;

  const ContentBase = styled["div"]`
    gap: 3px;
    align-items: flex-start;
    justify-content: flex-start;
  `;
  const Content = styled(ContentBase)`
    align-items: flex-start;
    justify-content: flex-start;
  `;
  const Title = styled["h1"]`
    font: var(--Body-Large-500);
    font-size: 1.1rem;
    color: var(--Green-900);
  `;
  const Text = styled["p"]`
    font: var(--Body-Small-400);
    color: var(--Green-500);
  `;
  const Link = styled(BaseLink)`
    padding: 0.2rem 1rem 0.2rem 0;
    background-color: transparent;
    text-transform: none;

    font: var(--Body-Medium-400);
    color: var(--Success);
    gap: 7px;
  `;

  return (
    <BlogCardContainer className="d-flex">
      <ImageContainer className="d-flex">
        <Image src={image?.path} />
        <ContainerDate className="d-flex">
          <TitleDateBase>23</TitleDateBase>
          <TitleDate>jan</TitleDate>
        </ContainerDate>
      </ImageContainer>
      <ContentBase className="d-flex">
        <Content className="d-flex">
          <Title>Curabitur porttitor orci eget neque accumsan venenatis.</Title>
          <Text>
            Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex.
            Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.
          </Text>
        </Content>
        <Link to="#" className="d-flex">
          Ler mais <ArrowRight size={20} strokeWidth={1.65} />
        </Link>
      </ContentBase>
    </BlogCardContainer>
  );
};

export default BlogCard;
