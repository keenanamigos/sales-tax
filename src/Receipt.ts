import { IItem } from "./interfaces/IItem";
import { ShoppingBasket } from "./ShoppingBasket";
import { Tax } from "./Tax";

export class Receipt {
    public itemList: ShoppingBasket;

    public constructor(shoppingBasket: ShoppingBasket) {
        this.itemList = shoppingBasket;
    }

    public print(): string {
        let output = "";
        let postTaxTotal = 0;
        let salesTax: number;
        let formattedPrice: string;
        const basket = this.itemList.shoppingBasket;
        const preTaxTotal = this.getTotal(basket);

        for (const item of basket) {
            this.applyTax(item);
            formattedPrice = item.price.toFixed(2);
            output += `${item.quantity} ${item.description}: ${formattedPrice}\n`;
        }

        postTaxTotal = this.getTotal(basket);
        salesTax = this.getSalesTax(preTaxTotal, postTaxTotal);

        output += `\nSales Taxes: ${salesTax.toFixed(2)}`;
        output += `\nTotal: ${postTaxTotal}`;

        return output;
    }

    // Extract into TaxCalculator class as a static method
    private applyTax(item: IItem): void {
        /* Tax scenarios */
        if (item.isImported(item.description) && !item.isExempt(item.description)) {
            item.price += (item.price * Tax.SalesTax) + (item.price * Tax.ImportTax);
            item.price = this.roundUp(item.price);
        } else if (!item.isImported(item.description) && !item.isExempt(item.description)) {
            item.price += (item.price * Tax.SalesTax);
            item.price = this.roundUp(item.price);
        } else if (item.isImported(item.description) && item.isExempt(item.description)) {
            item.price += (item.price * Tax.ImportTax);
            item.price = this.roundUp(item.price);
        }
    }

    private roundUp(price: number): number {
        // Rounding up to the nearest 0.05
        return (Math.ceil(price * 20) / 20);
    }

    private getTotal(basket: IItem[]): number {
        let total = 0;

        for (const item of basket) {
            total += item.price;
        }

        return this.roundUp(total);
    }

    // Extract into TaxCalculator class as a static method
    private getSalesTax(preTaxTotal: number, postTaxTotal: number): number {
        return (postTaxTotal - preTaxTotal);
    }
}