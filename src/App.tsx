import TeamCard from "./components/main-components/TeamCard/TeamCard";
import image from "./assets/containers/Image.jpg";

const App = () => {
  return (
    <main className="main">
      <div className="aux d-flex">
        <TeamCard
          name="Delcio Capolo"
          category="CEO & Co-founder"
          pathImage={image}
        />
      </div>
    </main>
  );
};

export default App;
