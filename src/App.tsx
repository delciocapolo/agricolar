import { Fragment } from "react";
import Menu from "./components/Navigation/Menu";
import Skeleton from "./components/Body/Skeleton";
import imageExample from "./assets/products/Image.jpg"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { MenuCustom } from "./components/main-components/MenuToggle/MenuCustom";
// import { IITemMenuCustom } from "./components/main-components/MenuToggle/interfaces/interfaces";

const App = () => {
  // const social_medias: IMediaCard[] = [
  //   {
  //     media: "facebook",
  //     url: "https://m.facebook.com/delciocapolo",
  //   },
  //   {
  //     media: "instagram",
  //     url: "https://m.facebook.com/delciocapolo",
  //   },
  //   {
  //     media: "linkedin",
  //     url: "https://m.facebook.com/delciocapolo",
  //   },
  //   {
  //     media: "twitter",
  //     url: "https://m.facebook.com/delciocapolo",
  //   },
  // ];

  // const multiMenuList: IITemMenuCustom[] = [
  //   {
  //     title: 'Home',
  //     url: 'https://google.com',
  //   },
  //   {
  //     title: 'Recursos',
  //     list: [
  //       {
  //         title: 'api',
  //         url: 'angola',
  //         list: [
  //           {
  //             title: 'agricolar',
  //             url: 'agricolar',
  //             list: [
  //               {
  //                 title: 'improve',
  //                 url: 'done'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         title: 'api',
  //         url: 'angola',
  //         list: [
  //           {
  //             title: 'agricolar',
  //             url: 'agricolar',
  //             list: [
  //               {
  //                 title: 'improve',
  //                 url: 'done'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //     ]
  //   }
  // ]

  return (
    <Fragment>
      <Menu />
      <Header />
      <Skeleton />
      <Footer />
    </Fragment>
  );
};

export default App;
