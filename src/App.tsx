import Default from "./components/main-components/Feature/Default";

const App = () => {
  return (
    <main className="main">
      <div className="aux d-flex">
        <Default
          props={{
            container: false,
            imageState: "box",
            title: "Free shipping",
            info: "Free shipping on all your order",
            orientation: "default",
          }}
        />
        <Default
          props={{
            container: true,
            imageState: "box",
            title: "Free shipping",
            info: "Free shipping on all your order",
            orientation: "reverse",
          }}
        />
      </div>
    </main>
  );
};

export default App;
