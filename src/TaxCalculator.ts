import { Tax } from "./enums/Tax";
import { NumberHelper } from "./helpers/NumberHelper";
import { IItem } from "./interfaces/IItem";

export class TaxCalculator {
    public static applyTax(item: IItem): void {
        /* Tax scenarios */
        if (item.isImported(item.description) && !item.isExempt(item.description)) {
            item.price += NumberHelper.roundUp((item.price * Tax.SalesTax) + (item.price * Tax.ImportTax));
        } else if (!item.isImported(item.description) && !item.isExempt(item.description)) {
            item.price += NumberHelper.roundUp((item.price * Tax.SalesTax));
        } else if (item.isImported(item.description) && item.isExempt(item.description)) {
            item.price += NumberHelper.roundUp(item.price * Tax.ImportTax);
        }
    }

    public static getSalesTaxTotal(preTaxTotal: number, postTaxTotal: number): number {
        return (postTaxTotal - preTaxTotal);
    }
}