import { Item } from "./item/item.model";

export class Menu {
    items: Item[] = new Array();

    constructor() {
        this.items.push(new Item("Köfte", 12, 400, "Our namesake. Inspired by the finest restaurants in Istanbul. Comes with three skewers of your choice of meat (Beef or Lamb) and a side of rice.",""));
        this.items.push(new Item("Döner Kebap", 11, 310, "Shaved vertical spit-roasted beef served in a wrap with lettuce, tomato, onions and a white sauce.",""));
    }
}