import { Item } from '../../menu/item/item.model';

export class CartItem {
    public item: Item;
    public quantity: number;
    public option: number[];

    constructor(item: Item) {
        this.item = item;
        this.quantity = 1;
        this.option = new Array<number>(item.options.length);
        for (let i=0; i<this.option.length; i++) {
            this.option[i] = 0;
        }
    }

    getPrice(): number {
        return this.item.price * this.quantity;
    }
}