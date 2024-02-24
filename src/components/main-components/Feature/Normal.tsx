import { FC } from "react";
import { II } from "./interfaces/interfaces";
import IconFeature from "./internalComponents/IconFeature";
import InfoFeature from "./internalComponents/InfoFeature";

const Normal: FC<II & { size?: number }> = ({ props, size = 30 }) => {
  const { container, imageState, info, title } = props;

  return (
    <div className="container-feature d-grid">
      <IconFeature container={container} imageState={imageState} size={size} />
      <InfoFeature title={title} info={info} />
    </div>
  );
};

export default Normal;
