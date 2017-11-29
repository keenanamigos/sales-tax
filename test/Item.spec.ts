import { expect } from "chai";
import { Item } from "../src/Item";

describe("Item", () => {
    describe("isImported", () => {
        it("should return true when the description property contains the word 'imported'", () => {
            const item1 = new Item(1, "imported bottle of perfume", 47.50);

            expect(item1.isImported(item1.description)).to.equal(true);
        });

        it("should return false when the description property does not contain the word 'imported'", () => {
            const item1 = new Item(1, "bottle of perfume", 18.99);

            expect(item1.isImported(item1.description)).to.equal(false);
        });
    });
});