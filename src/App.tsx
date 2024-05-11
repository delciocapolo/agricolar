import { useEffect, useState, lazy, Suspense } from "react";
import i10 from './assets/header/HeaderPhoto2.jpg';
import i19 from './assets/newsletterpopup/newsletterpopup.jpg';
import i20 from './assets/products/Image.jpg';
import { cacheImages } from "./components/utils/CacheImages";
import Spinner from "./components/main-components/Spinner/Spinner";
import ContextComponent from "./components/ContextComponent/ContextComponent";

const Menu = lazy(() => import("./components/Navigation/Menu"));
const Skeleton = lazy(() => import("./components/Body/Skeleton"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // const imgs = [i10, i19, i20];
    // cacheImages(imgs, setIsLoading);
    setIsLoading(prev => (!prev));
  }, []);

  return (
    <ContextComponent>
      <Suspense fallback={<Spinner loading={isLoading} />}>
        <Menu />
        <Header />
        <Skeleton />
        <Footer />
      </Suspense>
    </ContextComponent>
  );
};

export default App;







// import i4 from './assets/blogcard/card1.jpg';
// import i5 from './assets/blogcard/card2.jpg';
// import i6 from './assets/blogcard/card3.jpg';
// import i11 from './assets/instagram/i1.jpg';
// import i12 from './assets/instagram/i2.jpg';
// import i13 from './assets/instagram/i3.jpg';
// import i14 from './assets/instagram/i4.jpg';
// import i15 from './assets/instagram/i5.jpg';
// import i16 from './assets/instagram/i6.jpg';
// import i17 from './assets/instagram/i7.jpg';
// import i18 from './assets/instagram/i8.jpg';