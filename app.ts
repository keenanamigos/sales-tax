#!/usr/bin/env node
import * as chalk from "chalk";
import { IItem } from "./src/interfaces/IItem";
import { Receipt } from "./src/Receipt";
import { ShoppingBasket } from "./src/ShoppingBasket";
import { TextFileParser } from "./src/TextFileParser";

const arrayOfItems: IItem[] = TextFileParser.parse();
const shoppingBasket: ShoppingBasket = new ShoppingBasket(...arrayOfItems);
const receipt: Receipt = new Receipt(shoppingBasket);

console.log(receipt.print());