import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemicalsService } from 'src/app/services/chemicals.service';
import { Transaction } from 'src/app/types';


@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent {

  transaction!: Transaction;
  items = [] as { name: string, quantity: number }[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private chemService: ChemicalsService) {
    const transactionId = this.activatedRoute.snapshot.queryParams.transactionId;
    this.chemService.getById(transactionId!).subscribe(transaction => {
      console.log(transaction);
      this.transaction = transaction!;

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
    });

  }

  finish() {
    this.router.navigate(['/']);
  }

}
