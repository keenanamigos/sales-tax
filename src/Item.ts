export class Item {
    public quantity: number;
    public description: string;
    public price: number;

    public constructor(quantity: number, description: string, price: number) {
        this.quantity = quantity;
        this.description = description;
        this.price = price;
    }

    public isImported(description: string) {
        return description.includes("imported");
    }
}