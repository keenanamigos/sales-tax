import * as fs from "fs";
import { ArrayHelper } from "./helpers/ArrayHelper";
import { IItem } from "./interfaces/IItem";
import { StoreItem } from "./StoreItem";

export class TextFileParser {
    public static parse(): IItem[] {
        const arrayOfObjects = [];
        const file: string = fs.readFileSync(process.argv[process.argv.length - 1], "utf8");
        const array: string[] = file.split("\n");

        for (const item of array) {
            let itemDescription = "";
            let itemArray: string[] = item.split(" ");
            itemArray = ArrayHelper.removeWord(itemArray, "at");
            const length: number = itemArray.length;

            for (let i = 1; i < length - 1; i++) {
                itemDescription += itemArray[i] + " ";
            }

            const quantity: number = parseFloat(itemArray[0]);
            const description: string = itemDescription.trim();
            const price: number = parseFloat(itemArray[length - 1]);

            const parsedItem: StoreItem = new StoreItem(quantity, description, price);

            arrayOfObjects.push(parsedItem);
        }

        return arrayOfObjects;
    }
}