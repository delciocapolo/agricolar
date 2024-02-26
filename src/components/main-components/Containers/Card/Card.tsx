import { FC } from "react";
import { ICard } from "./interfaces/interface";
import { ChildrenImage } from "./internalComponents/ChildrenImage";
import { ChildrenInfo } from "./internalComponents/ChildrenInfo";

const Card: FC<ICard> = ({
  childrenImage,
  childrenInfo,
  sizeType = "small",
  propsImage,
}) => {
  const { pathImage, category, name } = propsImage;

  return (
    <div className={`container-card-global ${sizeType}`}>
      {
        <ChildrenImage
          childrenImage={childrenImage}
          pathImage={pathImage}
          category={category}
          name={name}
        />
      }
      {<ChildrenInfo childrenInfo={childrenInfo} />}
    </div>
  );
};

export default Card;
