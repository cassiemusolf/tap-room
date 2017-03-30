import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
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
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, price: number, alcoholContent: number, volume: number) {
    var newKegToAdd: Keg = new Keg(brand, price, alcoholContent, volume);
    this.newKegSender.emit(newKegToAdd);
  }
}
