import {JSX} from "react";
import urlBackgroundImage from "./assets/background.jpg";
import Header from "./components/header/Header";
import ProductSection from "./components/sections/featuredProducts/ProductSection";


const App = ():JSX.Element => {
  return (
    <main className="main">
      <Header urlBackgroundImage={urlBackgroundImage} />
      <ProductSection />
    </main>
  );
}

export default App;