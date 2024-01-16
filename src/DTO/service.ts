import { IItemService } from "../components/skeleton/Service";
import note from "../assets/serviceIcons/note.svg";
import statitic from "../assets/serviceIcons/statitic.svg";
import strategy from "../assets/serviceIcons/strategy.svg";
import nworldote from "../assets/serviceIcons/world.svg";

export const services: IItemService[] = [
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
    descriptionImg: "monitoramento áereo dos plantios",
  },
  {
    url: "farmonline",
    pathImage: nworldote,
    descriptionImg: "tornar a fazenda online",
  },
];
