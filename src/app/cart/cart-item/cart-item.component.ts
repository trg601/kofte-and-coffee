import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ItemOptions } from 'src/app/menu/item/itemOptions.model';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() item: CartItem;
  @Output() removeItem = new EventEmitter();
  @Output() setQuantity = new EventEmitter<{item: CartItem, quantity: number}>();
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

  getOptions(): ItemOptions[] {
    return this.item.item.options;
  }

  getChoiceList(): string {
    let str = "";
    let options: ItemOptions[] = this.getOptions();
    for (let i=0; i<options.length; i++) {
      if (i != 0) str += ", ";
      str += options[i].options[this.item.option[i]];
    }
    return str;
  }

  updateChoice(index: number, value: string) {
    this.item.option[index] = parseInt(value);
  }
}
