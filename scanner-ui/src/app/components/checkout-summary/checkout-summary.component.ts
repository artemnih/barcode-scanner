import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/types';

interface SummaryItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit {

  transaction = {
    id: '1',
    date: '2020-01-01',
    user: 'John Doe',
    items: [
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
        name: 'Acetic Acid',
        formula: 'C2H3O2',
        weight: '100g',
        barcode: "000222222"
      }
    ]
  } as Transaction;

  items = [] as SummaryItem[];

  constructor(private router: Router) {
    const chemicals = this.transaction.items.reduce((acc, curr) => {
      if (acc[curr.name]) {
        acc[curr.name]++;
      } else {
        acc[curr.name] = 1;
      }
      return acc;
    }, {} as { [name: string]: number });

    Object.keys(chemicals).sort().forEach(name => {
      this.items.push({
        name,
        quantity: chemicals[name]
      });
    });
  }

  ngOnInit(): void {
  }

  finish() {
    this.router.navigate(['/']);
  }

}
