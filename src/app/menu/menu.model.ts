import { Item } from "./item/item.model";

export class Menu {
    items: Item[] = new Array();

    constructor() {
        this.items.push(new Item("Köfte", 12, 400, "Our namesake. Inspired by the finest restaurants in Istanbul. Comes with three skewers of your choice of meat (Beef or Lamb) and a side of rice.","https://www.carolinescooking.com/wp-content/uploads/2018/07/lamb-kofte-photo.jpg"));
        this.items.push(new Item("Döner Kebap", 11, 310, "Shaved vertical spit-roasted beef served in a wrap with lettuce, tomato, onions and a white sauce.",""));
        this.items.push(new Item("Shepherd Salad", 6, 200, "Finely chopped tomatoes, cucumbers, onion and flat-leaf parsley. The dressing consist of lemon juice, olive oil and salt", ""));
        this.items.push(new Item("Ezme", 6, 210, "Hot spicy freshly mashed tomato with onion, cucumber and green herbs", ""));
        this.items.push(new Item("Eggplant Sauce", 6, 210, "Egg poached in a sauce of tomatoes, olive oil, peppers, onion and garlic. Spiced with paprika, cayenne, and nutmeg", ""));
        this.items.push(new Item("French Fries", 4, 420, "Hand cut russet potatoes fried and served with ketchup", ""));
        this.items.push(new Item("Felafel ( 6 Piece )", 6, 360, "Deep-fried ball made from ground chickpeas and some herbs", ""));
        this.items.push(new Item("Diced Lamb Pide", 13, 620, "Spiced lamb and cheese in turkish pizza dough", ""));
        this.items.push(new Item("Baklava", 5, 390, "Layered butter filled with crushed pistachios and dipped in honey", ""));
    }
}