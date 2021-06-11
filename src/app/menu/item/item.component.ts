import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() addToOrder = new EventEmitter();

  constructor() {
    this.item = new Item("testItem", 3, 120, "Tastes great!", "");
  }

  ngOnInit(): void {
  }

}
