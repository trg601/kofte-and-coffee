import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() item: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

}
