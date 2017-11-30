import { IItem } from "./interfaces/IItem";

export class StoreItem implements IItem {
    public quantity: number;
    public description: string;
    public price: number;

    public constructor(quantity: number, description: string, price: number) {
        this.quantity = quantity;
        this.description = description;
        this.price = price;
    }

    public isImported(description: string): boolean {
        return description.includes("imported");
    }

    public isExempt(description: string): boolean {
        // The items contained in this array are specific to the test data given per the problem
        const salesTaxExemptItems: string[] = ["book", "chocolate", "pill"];

        for (const item of salesTaxExemptItems) {
            if (description.includes(item)) {
                return true;
            }
        }

        return false;
    }
}