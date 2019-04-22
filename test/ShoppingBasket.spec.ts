import { expect } from "chai";
import { ShoppingBasket } from "../src/ShoppingBasket";
import { StoreItem } from "../src/StoreItem";

describe("ShoppingBasket", () => {
    describe("validateItems", () => {
        it("should return all valid items", () => {
            const storeItems: StoreItem[] = [
                new StoreItem(1, "book", 12.49),
                new StoreItem(1, "imported box of chocolates", 10),
                new StoreItem(1, "imported bottle of perfume", 27.99)
            ];
            const shoppingBasket = new ShoppingBasket(...storeItems);
            // tslint:disable-next-line:no-string-literal
            expect(shoppingBasket["validateItems"](storeItems).length).to.equal(3);
        });
    });

    describe("validateValues", () => {
        const storeItems: StoreItem[] = [
            new StoreItem(1, "book", 12.49),
            new StoreItem(1, "imported box of chocolates", 10),
            new StoreItem(1, "imported bottle of perfume", 27.99)
        ];
        it("should return true if the item contains valid values", () => {
            const shoppingBasket = new ShoppingBasket(...storeItems);
            // tslint:disable-next-line:no-string-literal
            expect(shoppingBasket["validateValues"](storeItems[0])).to.equal(true);
        });

        it("should return false if the item contains invalid values", () => {
            const invalidItem = new StoreItem(1, "", 10);
            const shoppingBasket = new ShoppingBasket(...storeItems);
            // tslint:disable-next-line:no-string-literal
            expect(shoppingBasket["validateValues"](invalidItem)).to.equal(false);
        });
    });
});
