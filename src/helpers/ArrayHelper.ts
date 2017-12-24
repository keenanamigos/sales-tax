export class ArrayHelper {
    public static removeWord(array: string[], word: string): string[] {
        const index: number = array.indexOf(word);
        // -1 indicates the given word does not exist in the array
        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    }
}