export interface IItem {
    quantity: number;
    description: string;
    price: number;
    isImported: (description: string) => boolean;
    isExempt: (description: string) => boolean;
}