import { expect } from "chai";
import { ArrayHelper } from "../src/helpers/ArrayHelper";

describe("ArrayHelper", () => {
    describe("removeWord", () => {
        it("should remove the word 'bacon' from the array and return a new array", () => {
            const someArray = ["I", "want", "bacon"];
            const newArray = ArrayHelper.removeWord(someArray, "bacon");
            expect(newArray).to.deep.equal(["I", "want"]);
        });

        it("should return the original array if the given word cannot be found", () => {
            const someArray = ["I", "want"];
            const newArray = ArrayHelper.removeWord(someArray, "bacon");
            expect(newArray).to.equal(someArray);
        });
    });
});