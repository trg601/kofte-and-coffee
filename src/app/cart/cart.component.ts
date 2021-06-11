import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotal(): number {
    let sum = 0;
    for (let item of this.cartService.getCart().items) {
      sum += item.getPrice();
    }
    return sum;
  }

}
