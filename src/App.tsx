import {JSX} from "react";
import Header from "./components/header/Header";
import urlBackgroundImage from "./assets/background.jpg";

const App = ():JSX.Element => {
  return (
    <main className="main">
      <Header urlBackgroundImage={urlBackgroundImage} />
    </main>
  );
}

export default App;