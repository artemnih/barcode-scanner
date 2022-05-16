import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Chemical, Transaction } from '../types';

const TRANSACTIONS: Transaction[] = [];
let TRANSACTION_ID = 0;

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
  getInfo(barcode: string) {
    const chemical = CHEMICALS.find(c => c.barcode === barcode);
    return of(chemical);
  }

  getById(id: string) {
    const transaction = TRANSACTIONS.find(t => t.id === id);
    return of(transaction);
  }

  checkout(userId: string, items: Chemical[]) {
    const transactionId = `000${TRANSACTION_ID++}`;
    const mockTransaction: Transaction = {
      id: transactionId,
      date: new Date().toISOString(),
      user: userId,
      items: items
    };
    TRANSACTIONS.push(mockTransaction);

    return of(mockTransaction.id);
  }

  checkin(userId: string, items: Chemical[]) {
    const transactionId = `000${TRANSACTION_ID++}`;
    const mockTransaction: Transaction = {
      id: transactionId,
      date: new Date().toISOString(),
      user: userId,
      items: items
    };
    TRANSACTIONS.push(mockTransaction);

    return of(mockTransaction.id);
  }


}
