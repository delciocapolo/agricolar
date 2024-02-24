import { FC } from "react";
import { IDefault } from "../interfaces/interfaces";

const InfoFeature: FC<
  Pick<IDefault, "info" | "title"> & {
    alignItems?: "flex-start" | "flex-end";
  }
> = ({ info, title, alignItems }) => {
  return (
    <div
      className="container-info-feature d-flex"
      style={{
        alignItems: alignItems,
      }}
    >
      <h1 className="title-feature">{title}</h1>
      <h2 className="info-feature">{info}</h2>
    </div>
  );
};

export default InfoFeature;
