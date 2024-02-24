import {
  HeartPulse,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { FC } from "react";
import { IDefault } from "../interfaces/interfaces";
import { CSSProperties } from "styled-components";
import containerAsset from "../../../../assets/containers/Container.jpg";

const IconFeature: FC<
  Pick<IDefault, "container" | "imageState"> & { size?: number }
> = ({ container, imageState, size }) => {
  const background = !container ? "background d-flex" : undefined;
  const style: CSSProperties = {
    color: "var(--Success-Dark)",
    strokeWidth: 1.2,
  };

  return (
    <div className="container-icon-feature d-flex">
      {container && (
        <img
          src={containerAsset}
          alt="Container"
          className="image-container-background"
        />
      )}
      <div className={background}>
        {imageState === "box" && <Package size={size} style={style} />}
        {imageState === "heartbeat" && <HeartPulse size={size} style={style} />}
        {imageState === "clean" && <Sparkles size={size} style={style} />}
        {imageState === "sucure" && <ShieldCheck size={size} style={style} />}
        {imageState === "star" && <Star size={size} style={style} />}
        {imageState === "time" && <Phone size={size} style={style} />}
        {imageState === "shipping" && <Truck size={size} style={style} />}
      </div>
    </div>
  );
};

export default IconFeature;
