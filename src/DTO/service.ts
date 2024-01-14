import { IService } from "../components/skeleton/Service";
import note from "../assets/serviceIcons/note.svg";
import statitic from "../assets/serviceIcons/statitic.svg";
import strategy from "../assets/serviceIcons/strategy.svg";
import nworldote from "../assets/serviceIcons/world.svg";

export const services: IService[] = [
  {
    url: "logistica",
    pathImage: note,
    descriptionImg: "elaborar estrategias e consultoria",
  },
  {
    url: "marketing",
    pathImage: statitic,
    descriptionImg: "consolidar fazenda no mercado digital",
  },
  {
    url: "agricolar",
    pathImage: strategy,
    descriptionImg: "monitoramento áereo das plantações",
  },
  {
    url: "farmonline",
    pathImage: nworldote,
    descriptionImg: "tornar a fazenda online",
  },
];
