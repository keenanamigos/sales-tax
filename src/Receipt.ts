import { ShoppingBasket } from "./ShoppingBasket";

export class Receipt {
    public itemList: ShoppingBasket;

    public constructor(shoppingBasket: ShoppingBasket) {
        this.itemList = shoppingBasket;
    }
}