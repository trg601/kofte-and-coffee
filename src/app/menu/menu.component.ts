import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item/cart-item.model';
import { Item } from './item/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu: Menu;

  constructor(private cartService: CartService) {
    this.menu = new Menu();
  }

  ngOnInit(): void {
  }

  getCartItems(): CartItem[] {
    return this.cartService.getCart().items;
  }

  addToOrder(item: Item) {
    this.cartService.getCart().addToCart(item);
  }
}
