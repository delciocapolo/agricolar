import { FC } from "react";

export const ChildrenInfo: FC<{ childrenInfo?: JSX.Element }> = ({
  childrenInfo,
}) => {
  return <div className="container-info-team-card d-grid">{childrenInfo}</div>;
};
