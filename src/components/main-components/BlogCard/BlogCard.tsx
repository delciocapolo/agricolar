import Card from "../Containers/Card/Card";
import Prato from "../../../assets/containers/Prato.jpg";
import { FC } from "react";
import { IChildrenImage } from "../Containers/Card/interfaces/interface";
import ContainerImage from "./internalComponents/ContainerImage";
import ContainerInfo from "./internalComponents/ContainerInfo";

export interface IBlogCard {
  url_readmore: string;
  url_imagefood?: string;
}

const BlogCard: FC<IBlogCard> = ({ url_readmore, url_imagefood = Prato }) => {
  const info =
    "Curabitur porttitor orci eget neque accumsan venenatis. fermentum";
  const propsImage: IChildrenImage = {
    pathImage: Prato,
  };
  return (
    <Card
      sizeType="medium"
      propsImage={propsImage}
      childrenImage={<ContainerImage url_imagefood={url_imagefood} />}
      childrenInfo={
        <ContainerInfo
          num_comments={15}
          info={info}
          url_readmore={url_readmore}
        />
      }
    />
  );
};

export default BlogCard;
