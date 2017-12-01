import { expect } from "chai";
import { StoreItem } from "../src/StoreItem";
import { TaxCalculator } from "../src/TaxCalculator";

describe("TaxCalculator", () => {
    describe("getSalesTaxTotal", () => {
        it("should return 120.00 for a postTaxTotal of 160.00 and a preTaxTotal of 40.00", () => {
            const preTaxTotal = 40.00;
            const postTaxTotal = 160.00;

            expect(TaxCalculator.getSalesTaxTotal(preTaxTotal, postTaxTotal)).to.equal(120.00);
        });
    });
});