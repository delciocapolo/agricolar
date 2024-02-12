import BigProductCar from "./components/main-components/Big-Products/BigProduct.tsx";
import Normal from "./components/main-components/Product5n/Normal.tsx";

const App = () => {
  return (
    <main className="main">
      <div className="aux d-flex">
        <BigProductCar price={500} titleProduct="Maça" saleStatus={['sale']} saleValue={20} ratingNumber={3} numFeedbacks={150} offerTime='2024-03-31T23:59:59' />
      </div>
    </main>
  );
}

export default App;
