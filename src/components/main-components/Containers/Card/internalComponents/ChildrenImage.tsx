import { FC } from "react";
import { IChildrenImage } from "../interfaces/interface";

export const ChildrenImage: FC<
  { childrenImage?: JSX.Element } & IChildrenImage
> = ({ childrenImage, pathImage, category, name }) => {
  return (
    <div className="container-image-team-card d-flex">
      <img
        src={pathImage}
        alt={`${name} - ${category}`}
        className="image-team-card"
      />
      {childrenImage}
    </div>
  );
};
