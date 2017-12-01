import { expect } from "chai";
import { NumberHelper } from "../src/helpers/NumberHelper";

describe("NumberHelper", () => {
    describe("isGreaterThanZero", () => {
        it("should return true if the given number is greater than zero", () => {
            const value = 1;
            expect(NumberHelper.isGreaterThanZero(value)).to.equal(true);
        });

        it("should return false if the given number is 0", () => {
            const value = 0;
            expect(NumberHelper.isGreaterThanZero(value)).to.equal(false);
        });

        it("should return false if the given number is less than 0", () => {
            const value = -1;
            expect(NumberHelper.isGreaterThanZero(value)).to.equal(false);
        });
    });

    describe("roundUp", () => {
        it("should return a number rounded up to the nearest 0.05", () => {
            const someNum = 54.625;
            expect(NumberHelper.roundUp(someNum)).to.equal(54.65);
        });
    });
});