import { JSX, FC } from "react";

interface ICard {
  childrenImage?: JSX.Element;
  childrenInfo?: JSX.Element;
  sizeType?: "small" | "medium" | "big";
}
export const ChildrenImage: FC<{ childrenImage?: JSX.Element }> = ({
  childrenImage,
}) => {
  return (
    <div className="container-image-team-card d-flex">{childrenImage}</div>
  );
};

export const ChildrenInfo: FC<{ childrenInfo?: JSX.Element }> = ({
  childrenInfo,
}) => {
  return <div className="container-info-team-card d-grid">{childrenInfo}</div>;
};
const Card: FC<ICard> = ({
  childrenImage,
  childrenInfo,
  sizeType = "small",
}) => {
  return (
    <div className={`container-team-card ${sizeType}`}>
      {<ChildrenImage childrenImage={childrenImage} />}
      {<ChildrenInfo childrenInfo={childrenInfo} />}
    </div>
  );
};

export default Card;
