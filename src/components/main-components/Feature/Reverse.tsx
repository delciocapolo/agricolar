import { FC } from "react";
import InfoFeature from "./internalComponents/InfoFeature";
import IconFeature from "./internalComponents/IconFeature";
import { II } from "./interfaces/interfaces";

const Reverse: FC<II & { size?: number }> = ({ props, size }) => {
  const { container, imageState, info, title } = props;
  return (
    <div
      className="container-feature d-grid"
      style={{
        justifyContent: "flex-end",
      }}
    >
      <InfoFeature info={info} title={title} alignItems="flex-end" />
      <IconFeature container={container} imageState={imageState} size={size} />
    </div>
  );
};

export default Reverse;
