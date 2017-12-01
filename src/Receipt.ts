import { NumberHelper } from "./helpers/NumberHelper";
import { IItem } from "./interfaces/IItem";
import { ShoppingBasket } from "./ShoppingBasket";
import { TaxCalculator } from "./TaxCalculator";

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
            TaxCalculator.applyTax(item);
            formattedPrice = item.price.toFixed(2);
            output += `${item.quantity} ${item.description}: ${formattedPrice}\n`;
        }

        postTaxTotal = this.getTotal(basket);
        salesTax = TaxCalculator.getSalesTaxTotal(preTaxTotal, postTaxTotal);

        output += `Sales Taxes: ${salesTax.toFixed(2)}`;
        output += `\nTotal: ${postTaxTotal.toFixed(2)}`;

        return output;
    }

    private getTotal(basket: IItem[]): number {
        let total = 0;

        for (const item of basket) {
            total += item.price;
        }

        return total;
    }
}