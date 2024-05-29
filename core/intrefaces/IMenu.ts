import {IFood} from "./IFood";

export interface IMenu {
    category: string,
    items:
    {
        product: IFood,
        offer: {
            price: number;
            currency: string;
        }
    }[]
}

