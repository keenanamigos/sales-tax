import { expect } from "chai";
import { Receipt } from "../src/Receipt";
import { ShoppingBasket } from "../src/ShoppingBasket";
import { StoreItem } from "../src/StoreItem";

describe("Receipt", () => {
    describe("print", () => {
        it("should print the contents of a given shopping basket in the proper format", () => {
            const item1: StoreItem = new StoreItem(1, "book", 12.49);
            const item2: StoreItem = new StoreItem(1, "music CD", 14.99);
            const item3: StoreItem = new StoreItem(1, "chocolate bar", 0.85);

            const shoppingbasket: ShoppingBasket = new ShoppingBasket(item1, item2, item3);
            const receipt: Receipt = new Receipt(shoppingbasket);
            const expectedOutput = `1 book: 12.49\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 29.83`;

            expect(receipt.print()).to.equal(expectedOutput);
        });
    });
});