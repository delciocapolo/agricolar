import { FC } from "react";
import QRCode from "react-qr-code";
import { v4 as uuid } from "uuid";
import { ITeamCard } from "./interfaces/interface";
import MediaCard from "./internalComponents/MediaCard";
import Card from "../Containers/Card/Card";
import { IChildrenImage } from "../Containers/Card/interfaces/interface";

const TeamCard: FC<ITeamCard> = ({
  name,
  category,
  social_medias = [],
  pathImage,
}) => {
  const propsImage: IChildrenImage = {
    name,
    category,
    pathImage,
  };

  const ContainerImage = () => {
    return (
      <>
        <nav className="container-medias-card d-flex">
          {social_medias.map(({ media, url }) => (
            <MediaCard media={media} url={url} key={uuid()} />
          ))}
        </nav>
      </>
    );
  };
  const ContainerInfo = () => {
    return (
      <>
        <div className="info-team-card d-flex">
          <h1 className="name-team-card">{name}</h1>
          <h2 className="category-team-card">{category}</h2>
        </div>
        <div className="container-qrcode-info d-flex">
          <QRCode value={name} size={45} />
        </div>
      </>
    );
  };

  return (
    <Card
      sizeType="small"
      propsImage={propsImage}
      childrenImage={<ContainerImage />}
      childrenInfo={<ContainerInfo />}
    />
  );
};

export default TeamCard;
