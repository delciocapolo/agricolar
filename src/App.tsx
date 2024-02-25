import TeamCard from "./components/main-components/TeamCard/TeamCard";
import image from "./assets/containers/Image.jpg";
import { IMediaCard } from "./components/main-components/TeamCard/interfaces/interface";

const App = () => {
  const social_medias: IMediaCard[] = [
    {
      media: "facebook",
      url: "https://nodejs.org/en/learn/getting-started/debugging",
    },
    {
      media: "instagram",
      url: "https://nodejs.org/en/learn/getting-started/debugging",
    },
    {
      media: "linkedin",
      url: "https://nodejs.org/en/learn/getting-started/debugging",
    },
  ];
  return (
    <main className="main">
      <div className="aux d-flex">
        <TeamCard
          name="Delcio Capolo"
          category="CEO & Co-founder"
          pathImage={image}
          social_medias={social_medias}
        />
      </div>
    </main>
  );
};

export default App;
