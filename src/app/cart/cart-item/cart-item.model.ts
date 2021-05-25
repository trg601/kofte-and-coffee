import { Item } from '../../menu/item/item.model';

export class CartItem {
    public item: Item;
    public quantity: number;

    constructor(item: Item) {
        this.item = item;
        this.quantity = 1;
    }
}