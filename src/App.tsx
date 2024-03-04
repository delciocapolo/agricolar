import Featured from "./components/main-components/Featured/Featured";
import { IMediaCard } from "./components/main-components/TeamCard/interfaces/interface";
import Box from "./components/main-components/TopLevelComponent/Box/Box";

const App = () => {
  const social_medias: IMediaCard[] = [
    {
      media: "facebook",
      url: "https://m.facebook.com/delciocapolo",
    },
    {
      media: "instagram",
      url: "https://m.facebook.com/delciocapolo",
    },
    {
      media: "linkedin",
      url: "https://m.facebook.com/delciocapolo",
    },
    {
      media: "twitter",
      url: "https://m.facebook.com/delciocapolo",
    },
  ];

  return (
    <main className="main">
      <Featured />
    </main>
  );
};

export default App;
