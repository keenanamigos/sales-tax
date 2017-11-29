export class ShoppingBasket {
    public shoppingBasket: Array<{ quantity: number, description: string, price: number }>;

    public constructor(...items: Array<{ quantity: number, description: string, price: number }>) {
        this.shoppingBasket = items;
    }
}