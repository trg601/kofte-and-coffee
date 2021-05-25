import { Item } from '../menu/item/item.model';
import { CartItem } from './cart-item/cart-item.model';

export class Cart {
    items: CartItem[] = new Array();

    constructor() {
    }
    
    public addToCart(item: Item): void {
        for (let cItem of this.items) {
            if (item == cItem.item) {
                cItem.quantity++;
                return;
            }
        }
        this.items.push(new CartItem(item));
    }

}