import { FC } from "react";
import Normal from "./Normal";
import Reverse from "./Reverse";
import { II } from "./interfaces/interfaces";

const Default: FC<II> = ({ props }) => {
  const { orientation } = props;
  const size = 30;

  if (orientation === "reverse") {
    return <Reverse props={props} size={size} />;
  }

  return <Normal props={props} size={size} />;
};

export default Default;
