import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div  class="jumbotron">
  </div>
  <h1 id="top">Tap Room</h1>
  <div class="container" id="list">
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <button class="btn btn-primary" (click)="closeToEmpty(kegs)">See almost empty kegs</button>

  <div>
    <h1>Almost Empty Kegs</h1>
      <ul>
        <li *ngFor="let keg of almostEmpty">{{keg.brand}}</li>
      </ul>
  </div>

<new-keg (newKegSender)="addKeg($event)"></new-keg>


  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  </div>

  `
})

export class AppComponent {

  almostEmpty: Keg[] = [];

  masterKegList: Keg[] = [
    new Keg('Heineken Lager', 5, 6.4, 124),
    new Keg('Newcastle Brown Ale', 6, 7, 124),
    new Keg('Coors Light Lager', 7, 7.8, 124),
    new Keg('Paulaner Oktoberfest Marzen Amber', 8, 6.9, 124),
    new Keg('DAB Original Lager', 5, 5.3, 124),
    new Keg('Widmer Hefeweizen', 4, 8, 124),
    new Keg('Bells Oberon Wheat Ale', 6, 7.8, 124),
    new Keg('Rogue Yellow Snow IPA', 7, 8, 124)
  ];


  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  closeToEmpty(kegs) {
    var emptyList = this.almostEmpty;
    this.masterKegList.forEach(function (keg) {
      if (keg.volume < 10){
        (emptyList).push(keg);
      }
    })
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }


}
