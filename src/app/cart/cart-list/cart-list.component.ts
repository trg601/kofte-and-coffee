import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/menu/item/item.model';
import { CartItem } from '../cart-item/cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCartItems(): CartItem[] {
    return this.cartService.getCart().items;
  }

  removeItem(item: CartItem) {
    this.cartService.getCart().removeItem(item);
  }

  setQuantity(itemQuantity: any) {
    this.cartService.getCart().setQuantity(itemQuantity.item, itemQuantity.quantity);
  }

}
