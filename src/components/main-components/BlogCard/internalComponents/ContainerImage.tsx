import { FC } from "react";
import { IBlogCard } from "../BlogCard";

const ContainerImage: FC<Pick<IBlogCard, "url_imagefood">> = ({
  url_imagefood,
}) => {
  return (
    <>
      <img src={url_imagefood} alt="Prato do dia" className="image-team-card" />
      <div className="container-date-blogcard">
        <h1 className="title">18</h1>
        <h2 className="subtitle">Nov</h2>
      </div>
    </>
  );
};

export default ContainerImage;
