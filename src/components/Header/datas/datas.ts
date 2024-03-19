import { IItemsArrow } from "../@types/IHeader";
import cestoFrutas from '../../../assets/products/Image.jpg';
import fruta1 from '../../../assets/products/Rectangle 5-1.jpg';

export const items: IItemsArrow[] = [
    {
        image: {
            path: cestoFrutas,
            describe: 'Imagem de cesto de frutas'
        }
    },
    {
        image: {
            path: fruta1,
            describe: 'Imagem de frutas'
        }
    },
];