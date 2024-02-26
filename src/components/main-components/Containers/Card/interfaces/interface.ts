export interface IChildrenImage {
  pathImage: string;
  name?: string;
  category?: string;
}

export interface ICard {
  childrenImage?: JSX.Element;
  propsImage: IChildrenImage;
  childrenInfo?: JSX.Element;
  sizeType?: "small" | "medium" | "big";
}
