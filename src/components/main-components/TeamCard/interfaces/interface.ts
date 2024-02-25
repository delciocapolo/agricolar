export interface ITeamCard {
  name: string;
  category: string;
  pathImage: string;
  social_medias: Array<IMediaCard>;
}

type media_available = "facebook" | "twitter" | "instagram" | "linkedin";

export interface IMediaCard {
  media: media_available;
  url: string;
}
