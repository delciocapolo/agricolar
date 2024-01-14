import { JSX, FC } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IService {
  title?: string;
  description?: string;
  url?: string;
  pathImage?: string;
  descriptionImg?: string;
  services?: Array<IService>;
  actived?: string;
}

const ItemService: FC<IService> = ({
  url,
  descriptionImg,
  pathImage,
  actived,
}): JSX.Element | undefined => {
  return (
    <a
      href={`http://localhost:5173/service/${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-service ${actived} d-grid`}
    >
      <svg
        width="125"
        height="125"
        viewBox="0 0 300 300"
        xmlns="https://www.w3c.org/2000/svg"
      >
        {/* <rect x="0" y="0" width="300" height="300" fill="lightgray" /> */}
        <image
          xlinkHref={pathImage}
          width="165"
          height="175"
          x="75"
          y="75"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
      <b className="descriptio-img">{descriptionImg}</b>
      {actived ? <span className="desc-card"></span> : <></>}
    </a>
  );
};

const Service: FC<IService> = ({
  title,
  description,
  services,
}): JSX.Element => {
  return (
    <article className="service">
      <div className="container d-grid">
        <div className="content d-grid">
          {title ? <h1 className="title">{title}</h1> : <></>}
          {description ? <h2 className="subtitle">{description}</h2> : <></>}
        </div>
        <nav className="image-content d-flex">
          {services?.map(({ url, descriptionImg, pathImage }) => (
            <ItemService
              descriptionImg={descriptionImg}
              pathImage={pathImage}
              url={url}
              key={uuidv4()}
            />
          ))}
        </nav>
      </div>
    </article>
  );
};

export default Service;

// const menuBar = document.querySelector(".menuBar");

// window.addEventListener("scroll", () => {
//     let scrollYPosition = window.scrollY;

//     for(let y = 100; y > scrollYPosition; y--) {
//         menuBar.classList.remove("actived");
//     }

//     menuBar.classList.add("actived");
// });
