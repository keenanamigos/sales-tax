import { expect } from "chai";
import { StoreItem } from "../src/StoreItem";
import { TaxCalculator } from "../src/TaxCalculator";

describe("TaxCalculator", () => {
    describe("applyTax", () => {
        const book = new StoreItem(1, "book", 12.49);
        const importedChocolate = new StoreItem(1, "imported box of chocolates", 10.00);
        const cd = new StoreItem(1, "music CD", 14.99);
        const perfume = new StoreItem(1, "imported bottle of perfume", 47.50);

        it("should return original price value for an exempt and not imported item", () => {
            TaxCalculator.applyTax(book);
            expect(book.price.toFixed(2)).to.equal("12.49");
        });

        it("should apply only the import tax on an item that is imported but exempt", () => {
            TaxCalculator.applyTax(importedChocolate);
            expect(importedChocolate.price.toFixed(2)).to.equal("10.50");
        });

        it("should apply a sales tax and an import tax for an imported and non-exempt item", () => {
            TaxCalculator.applyTax(perfume);
            expect(perfume.price.toFixed(2)).to.equal("54.65");
        });

        it("should apply only the basic sales tax for an item that is non-exempt and not imported", () => {
            TaxCalculator.applyTax(cd);
            expect(cd.price.toFixed(2)).to.equal("16.49");
        });
    });

    describe("getSalesTaxTotal", () => {
        it("should return 120.00 for a postTaxTotal of 160.00 and a preTaxTotal of 40.00", () => {
            const preTaxTotal = 40.00;
            const postTaxTotal = 160.00;

            expect(TaxCalculator.getSalesTaxTotal(preTaxTotal, postTaxTotal)).to.equal(120.00);
        });
    });
});