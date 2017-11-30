import { ShoppingBasket } from "./ShoppingBasket";

export class Receipt {
    public itemList: ShoppingBasket;

    public constructor(shoppingBasket: ShoppingBasket) {
        this.itemList = shoppingBasket;
    }

    public print(): string {
        let output = "";
        const basket = this.itemList.shoppingBasket;

        for (const item of basket) {
            output += `${item.quantity} ${item.description}: ${item.price}\n`;
        }

        return output;
    }
}