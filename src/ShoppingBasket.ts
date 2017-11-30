import { IItem } from "./interfaces/IItem";

export class ShoppingBasket {
    public shoppingBasket: IItem[];

    public constructor(...items: IItem[]) {
        this.shoppingBasket = items;
    }
}