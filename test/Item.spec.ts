import { expect } from "chai";
import { Item } from "../src/Item";

describe("Item", () => {
    describe("isImported", () => {
        it("should return true when the description property contains the word 'imported'", () => {
            const item1 = new Item(1, "imported bottle of perfume at", 47.50);

            expect(item1.isImported(item1.description)).to.equal(true);
        });

        it("should return false when the description property does not contain the word 'imported'", () => {
            const item1 = new Item(1, "bottle of perfume at", 18.99);

            expect(item1.isImported(item1.description)).to.equal(false);
        });
    });

    describe("isExempt", () => {
        it("should return true if the item is a book, food, or a medical product", () => {
            const item1 = new Item(1, "book at", 12.49);
            const item2 = new Item(1, "chocolate bar at", 0.85);
            const item3 = new Item(1, "packet of headache pills at", 9.75);

            expect(item1.isExempt(item1.description)).to.equal(true);
            expect(item2.isExempt(item2.description)).to.equal(true);
            expect(item3.isExempt(item3.description)).to.equal(true);
        });

        it("should return false if it is not a book, food, or a medical product", () => {
            const item1 = new Item(1, "music CD", 14.99);

            expect(item1.isExempt(item1.description)).to.equal(false);
        });
    });
});