import {JSX} from "react";
import Header from "./components/header/Header";
import Skeleton from "./components/skeleton/Skeleton";

const App = ():JSX.Element => {
  return (
    <main className="main">
      <Header />
      <Skeleton />
    </main>
  );
}

export default App;