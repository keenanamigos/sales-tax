import { NumberHelper } from "./helpers/NumberHelper";
import { IItem } from "./interfaces/IItem";

export class ShoppingBasket {
    public shoppingBasket: IItem[];

    public constructor(...items: IItem[]) {
        this.shoppingBasket = this.validateItems(items);
    }

    private validateItems(items: IItem[]): IItem[] {
        let index = 0;

        for (const item of items) {
            if (!(this.validateValues(item))) {
                items.splice(index, 1);
            }

            index++;
        }

        return items;
    }

    private validateValues(item: IItem): boolean {
        const areValuesValid = item && NumberHelper.isGreaterThanZero(item.quantity) && item.description && NumberHelper.isGreaterThanZero(item.price);

        return areValuesValid ? true: false;
    }
}