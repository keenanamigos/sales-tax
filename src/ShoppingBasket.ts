export class ShoppingBasket {
    public shoppingBasket: Array<{
            quantity: number,
            description: string,
            price: number,
            isImported: (description: string) => boolean,
            isExempt: (description: string) => boolean
    }>;

    public constructor(...items: Array<{quantity: number, description: string, price: number, isImported: (description: string) => boolean, isExempt: (description: string) => boolean}>) {
        this.shoppingBasket = items;
    }
}