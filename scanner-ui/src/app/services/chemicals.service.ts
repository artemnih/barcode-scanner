import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const CHEMICALS = [
  {
    name: 'Compound 1',
    formula: 'C2H5OH',
    weight: '100g',
    barcode: "000111111"
  },
  {
    name: 'Acetic Acid',
    formula: 'C2H3O2',
    weight: '100g',
    barcode: "000222222"
  },
  {
    name: 'Benzene',
    formula: 'C6H6',
    weight: '100g',
    barcode: "000134343"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ChemicalsService {

  constructor() { }

  getInfo(barcode: string) {
    const chemical = CHEMICALS.find(c => c.barcode === barcode);
    return of(chemical);
  }

  checkout(items: string[]) {
    return of(items);
  }

}
