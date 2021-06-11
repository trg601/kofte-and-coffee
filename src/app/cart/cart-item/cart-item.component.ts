import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() item: CartItem;
  @Output() removeItem = new EventEmitter();
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('editWindow') editWindow: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openEdit() {
    this.modal.nativeElement.style.display = "block";
    this.editWindow.nativeElement.style.display = "block";
  }

  closeEdit() {
    this.modal.nativeElement.style.display = "none";
    this.editWindow.nativeElement.style.display = "none";
  }

}
