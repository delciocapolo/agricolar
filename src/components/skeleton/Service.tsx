import { JSX, FC, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IService {
  title?: string;
  description?: string;
  services?: Array<IItemService>;
  actived?: boolean;
}

export interface IItemService {
  url?: string;
  pathImage?: string;
  descriptionImg?: string;
  descriptionFeaturedProduct?: string;
}

const ItemService: FC<IItemService & { status?: string; }> = ({
  url,
  descriptionImg,
  pathImage,
  status = '',
  descriptionFeaturedProduct = ''
}): JSX.Element | null => {
  if(!url) return null;

  const imageUrl = `http://localhost:5173/service/${url}`;

  return (
    <a
      href={imageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-service ${status} d-grid`}
    >
      <svg
        width="125"
        height="125"
        viewBox="0 0 300 300"
        xmlns="https://www.w3c.org/2000/svg"
      >
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
      {
        (descriptionFeaturedProduct !== '' && descriptionFeaturedProduct) 
        && <span className="desc-card">{descriptionFeaturedProduct}</span>
      }
    </a>
  );
};

const Service: FC<IService> = ({
  title,
  description,
  services,
  actived,
}): JSX.Element | null => {
  const [activedStatus, setActivedStatus] = useState<string>('');
  
  if(!title && !description && services?.length === 0) return null;

  useEffect(() => {
    if(actived) {
      setActivedStatus("actived");
    }
  }, [actived]);

  return (
    <article className="service">
      <div className="container d-grid">
        <div className="content d-grid">
          {title && <h1 className="title">{title}</h1>}
          {description && <h2 className="subtitle">{description}</h2>}
        </div>
        <nav className="image-content d-flex">
          {services?.map(({ url, descriptionImg, pathImage, descriptionFeaturedProduct }) => (
            <ItemService
              descriptionImg={descriptionImg}
              pathImage={pathImage}
              url={url}
              key={uuidv4()}
              status={activedStatus}
              descriptionFeaturedProduct={descriptionFeaturedProduct}
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
