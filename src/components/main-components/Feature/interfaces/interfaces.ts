type imageState =
  | "box"
  | "heartbeat"
  | "sucure"
  | "start"
  | "clean"
  | "time"
  | "shipping";

export interface IDefault {
  imageState: imageState;
  container: boolean;
  title: string;
  info: string;
  orientation: "default" | "reverse";
}

export interface II {
  props: IDefault;
}
