import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() activeElement: string;
  
  constructor() {
    this.activeElement = "none";
  }

  ngOnInit(): void {
  }

  isActive(elemName: string): string {
    if (this.activeElement == elemName) return "active";
    else return "";
  }

}
