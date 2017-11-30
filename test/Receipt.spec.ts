import { expect } from "chai";
import { Item } from "../src/Item";
import { Receipt } from "../src/Receipt";
import { ShoppingBasket } from "../src/ShoppingBasket";

describe("Receipt", () => {
    describe("print", () => {
        it("should print the contents of a given shopping basket", () => {
            const item1: Item = new Item(1, "book", 12.49);
            const item2: Item = new Item(1, "music CD", 16.49);
            const item3: Item = new Item(1, "chocolate bar", 0.85);

            const shoppingbasket: ShoppingBasket = new ShoppingBasket(item1, item2, item3);
            const receipt: Receipt = new Receipt(shoppingbasket);

            const expectedOutput = `${item1.quantity} ${item1.description}: ${item1.price}\n${item2.quantity} ${item2.description}: ${item2.price}\n${item3.quantity} ${item3.description}: ${item3.price}\n`;

            expect(receipt.print()).to.equal(expectedOutput);
        });
    });
});