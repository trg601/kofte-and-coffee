import { Item } from '../menu/item/item.model';
import { CartItem } from './cart-item/cart-item.model';

export class Cart {
    items: CartItem[] = new Array();

    constructor() {
    }
    
    public addToCart(item: Item): void {
        for (let cItem of this.items) {
            if (item === cItem.item && cItem.option.reduce((a, b) => a + b, 0) == 0) {
                cItem.quantity++;
                return;
            }
        }
        this.items.push(new CartItem(item));
    }

    public removeItem(item: CartItem): void {
        let i = 0;
        for (let cItem of this.items) {
            if (item === cItem) {
                this.items.splice(i, 1);
                return;
            }
            i++;
        }
    }

    public setQuantity(item: CartItem, quantity: number): void {
        if (quantity < 1) quantity = 1;
        let i = 0;
        for (let cItem of this.items) {
            if (item === cItem) {
                cItem.quantity = quantity;
                return;
            }
            i++;
        }
    }
}