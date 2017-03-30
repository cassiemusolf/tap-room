import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h3>Edit Keg</h3>
      <label>Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <label>Volume:</label>
      <input [(ngModel)]="childSelectedKeg.volume">
       <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
  }
}
