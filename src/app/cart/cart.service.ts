import { Injectable } from '@angular/core';
import { Item } from '../menu/item/item.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Cart;
  constructor() {
    this.cart = new Cart();
  }

  getCart(): Cart {
    return this.cart;
  }

}
