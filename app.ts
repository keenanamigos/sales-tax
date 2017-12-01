#!/usr/bin/env node
import * as chalk from "chalk";
import { Receipt } from "./src/Receipt";
import { ShoppingBasket } from "./src/ShoppingBasket";
import { TextFileParser } from "./src/TextFileParser";

const arrayOfItems = TextFileParser.parse();
const shoppingBasket = new ShoppingBasket(...arrayOfItems);
const receipt = new Receipt(shoppingBasket);

console.log(receipt.print());