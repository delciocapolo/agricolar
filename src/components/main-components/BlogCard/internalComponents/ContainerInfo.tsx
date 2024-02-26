import { MessageSquare, Tag, User } from "lucide-react";
import { CSSProperties, FC } from "react";
import ReadMore from "../../Buttons/ReadMore/ReadMore";
import { IBlogCard } from "../BlogCard";

const ContainerInfo: FC<
  Pick<IBlogCard, "url_readmore"> & { info: string; num_comments?: number }
> = ({ url_readmore, info, num_comments = 0 }) => {
  const iconStyle: CSSProperties = {
    color: "var(--Gray-300)",
  };
  const size = 15;

  return (
    <div className="container-info-blogcard d-flex">
      <div className="content-info-blogcard d-flex">
        <div className="tags-blogcard d-flex">
          <div className="container-tag-blogcard d-flex">
            <Tag style={iconStyle} size={size} />
            Comida
          </div>
          <div className="container-tag-blogcard d-flex">
            <User style={iconStyle} size={size} />
            Admin
          </div>
          <div className="container-tag-blogcard d-flex">
            <MessageSquare style={iconStyle} size={size} />
            {num_comments}
          </div>
        </div>
        <h1 className="title-blogcard">{info}</h1>
      </div>
      <ReadMore url={url_readmore} />
    </div>
  );
};

export default ContainerInfo;
