import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="almostEmptyKegs">Almost Empty Kegs</option>
    <option value="mostlyFullKegs">Mostly Full Kegs</option>
  </select>

  <ul>
    <li [class]="stylingKegs(currentKeg)" *ngFor="let currentKeg of childKegList | almostEmpty:filterByFullness">{{currentKeg.brand}}
    <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    <button class="btn" (click)='showKeg(currentKeg)'>Show details</button>
    <button class="btn btn-secondary" (click)="buyPint(currentKeg)">Buy</button>
    </li>
  </ul>

  <div *ngIf="showDetails" class="details">
  <p id="title">{{showDetails.brand}}</p>
  <p>Price: {{showDetails.price}}</p>
  <p>Alcohol Content: {{showDetails.alcoholContent}}</p>
  <p>Pints Left: {{showDetails.volume}}</p>
  <button class="btn" (click)="hideDetails()">Hide Details</button>
  </div>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];

  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(clickedKeg: Keg) {
    this.clickSender.emit(clickedKeg);
  }

  showDetails = null;

  showKeg(clickedKeg) {
    this.showDetails = clickedKeg;
  }

  hideDetails() {
    this.showDetails = null;
  }


  buyPint(clickedKeg) {
    clickedKeg.volume -= 1;
  }

  filterByFullness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByFullness = optionFromMenu;
  }

  stylingKegs(currentKeg) {
    var style1: string = "";
    var style2: string = "";
    if(currentKeg.price <= 5) {
      style1 = "bg-success";
    } else if (currentKeg.price >= 5) {
      style1 = "bg-info";
    }

    // if (currentKeg.alcoholContent >= 7) {
    //   style2 = "text-danger";
    // }
    return style1 + " " + style2;
  }

}
