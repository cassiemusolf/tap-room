import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Tap Room</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.brand}}
      <button (click)="editKeg(currentKeg)">Edit!</button>
      <button (click)='showKeg(currentKeg)'>Show details</button>
      <button (click)="buyPint(currentKeg)">Buy</button>
      </li>
    </ul>
  </div>

  <!-- <div>
    <button ng-click="showForm()">Add New Keg</button>
  </div> -->

  <div ng-show="addKeg">
    <h2>New Keg</h2>
    <label>Brand:</label>
    <input #newBrand>
    <label>Price:</label>
    <input #newPrice>
    <label>Alcohol Content:</label>
    <input #newAlcoholContent>
    <label>Volume:</label>
    <input #newVolume>
    <button (click)="submitForm(newBrand.value, newPrice.value, newAlcoholContent.value, newVolume.value); newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newVolume.value='';">Add</button>
  </div>

  <div *ngIf="showDetails">
  <p>{{showDetails.brand}}</p>
  <p>{{showDetails.price}}</p>
  <p>{{showDetails.alcoholContent}}</p>
  <p>{{showDetails.volume}}</p>
  <button (click)="hideDetails()">Hide Details</button>
  </div>


  <div *ngIf="selectedKeg">
    <h3>Edit Keg</h3>
    <label>Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <label>Alcohol Content:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <label>Volume:</label>
    <input [(ngModel)]="selectedKeg.volume">
     <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Heineken Lager', 5, 6.4, 124),
    new Keg('Newcastle Brown Ale', 6, 7, 124),
    new Keg('Coors Light Lager', 7, 7.8, 124),
    new Keg('Paulaner Oktoberfest Marzen Amber', 8, 6.9, 124),
    new Keg('DAB Original Lager', 9, 5.3, 124),
    new Keg('Widmer Hefeweizen', 8, 8, 124),
    new Keg('Bells Oberon Wheat Ale', 6, 7.8, 124),
    new Keg('Rogue Yellow Snow IPA', 7, 8, 124)
  ];

  showDetails = null;

  showKeg(clickedKeg) {
    this.showDetails = clickedKeg;
  }

  hideDetails() {
    this.showDetails = null;
  }

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
  this.selectedKeg = null;
  }

  buyPint(clickedKeg) {
    clickedKeg.volume -= 1;
  }


  // addKeg() {
  //   this.showForm = newForm;
  // }

    // $scope.addKeg = false;
    // $scope.showForm = function() {
    //   $scope.addKeg = !$scope.addKeg;
    // }

  submitForm(brand: string, price: number, alcoholContent: number, volume: number) {
    var newKegToAdd: Keg = new Keg(brand, price, alcoholContent, volume);
    this.kegs.push(newKegToAdd);
  }
}

export class Keg {
  constructor(public brand: string, public price: number, public alcoholContent: number, public volume: number) {}
}
