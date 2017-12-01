export class NumberHelper {
    public static isGreaterThanZero(int: number) {
        if (int > 0) {
            return true;
        }

        return false;
    }

    public static roundUp(price: number): number {
        const rounding = (1 / 0.05);
        // Rounding up to the nearest 0.05
        return (Math.ceil(price * rounding) / rounding);
    }
}