import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.brand}}
    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    <button (click)='showKeg(currentKeg)'>Show details</button>
    <button (click)="buyPint(currentKeg)">Buy</button>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(clickedKeg: Keg) {
    this.clickSender.emit(clickedKeg);
  }

  stylingKegs(currentKeg) {
    var style1: string = "";
    var style2: string = "";
    if(currentKeg.price <= 5) {
      style1 = "bg-success";
    } else if (currentKeg.price >= 5) {
      style1 = "bg-info";
    }

    if (currentKeg.alcoholContent >= 7) {
      style2 = "text-danger";
    }
    return style1 + " " + style2;
  }

  buyPint(clickedKeg) {
    clickedKeg.volume -= 1;
  }

}
