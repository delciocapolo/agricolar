import { FC } from "react";

interface ITeamCard {
  name: string;
  category: string;
  pathImage: string;
}

const TeamCard: FC<ITeamCard> = ({ name, category, pathImage }) => {
  return (
    <div className="container-team-card">
      <div className="container-image-team-card">
        <img
          src={pathImage}
          alt={`${name} - ${category}`}
          className="image-team-card"
        />
      </div>
      <div className="container-info-team-card">
        <h1 className="name-team-card">{name}</h1>
        <h2 className="category-team-card">{category}</h2>
      </div>
    </div>
  );
};

export default TeamCard;
