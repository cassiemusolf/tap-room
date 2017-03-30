import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Tap Room</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.brand}}   <button (click)="editKeg()">Edit!</button></li>
    </ul>
  </div>

  <div>
    <h3>Edit Keg</h3>
    <label>Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <label>Alcohol Content:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <label>Volume:</label>
    <input [(ngModel)]="selectedKeg.volume">
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

  editKeg() {
    alert("Want to edit this keg");
  }

  selectedKeg: Keg = this.kegs[0];
}


export class Keg {
  constructor(public brand: string, public price: number, public alcoholContent: number, public volume: number) {}
}
