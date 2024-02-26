import TeamCard from "./components/main-components/TeamCard/TeamCard";
import { IMediaCard } from "./components/main-components/TeamCard/interfaces/interface";
import image from "./assets/containers/Image.jpg";
import food from "./assets/containers/Prato.jpg";
import BlogCard from "./components/main-components/BlogCard/BlogCard";

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
      <div className="aux d-flex">
        <TeamCard
          social_medias={social_medias}
          name="Delcio Capolo"
          category="CEO & Co-Founder"
          pathImage={image}
        />
        <BlogCard url_readmore={social_medias[0].url} url_imagefood={food} />
      </div>
    </main>
  );
};

export default App;
