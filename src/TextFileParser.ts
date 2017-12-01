import * as fs from "fs";
import { ArrayHelper } from "./helpers/ArrayHelper";
import { IItem } from "./interfaces/IItem";
import { StoreItem } from "./StoreItem";

export class TextFileParser {
    public static parse(): IItem[] {
        const arrayOfObjects = [];
        const file = fs.readFileSync(process.argv[process.argv.length - 1], "utf8");
        const array = file.split("\n");

        for (const item of array) {
            let itemDescription = "";
            let itemArray = item.split(" ");
            itemArray = ArrayHelper.removeWord(itemArray, "at");
            const length = itemArray.length;

            for (let i = 1; i < length - 1; i++) {
                itemDescription += itemArray[i] + " ";
            }

            const quantity = parseFloat(itemArray[0]);
            const description = itemDescription.trim();
            const price = parseFloat(itemArray[length - 1]);

            const parsedItem = new StoreItem(quantity, description, price);

            arrayOfObjects.push(parsedItem);
        }

        return arrayOfObjects;
    }
}