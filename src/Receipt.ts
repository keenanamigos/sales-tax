export class Receipt {
    public itemList: Array<{ quantity: number, description: string, price: number }>;

    public constructor(shoppingBasket: Array<{ quantity: number, description: string, price: number }>) {
        this.itemList = shoppingBasket;
    }
}