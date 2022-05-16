import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemicalsService } from 'src/app/services/chemicals.service';
import { Chemical } from 'src/app/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private stash = [] as string[];
  public items = [] as Chemical[];

  constructor(private chemService: ChemicalsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {

      const barcode = this.stash.join('');
      this.stash = [];

      this.chemService.getInfo(barcode).subscribe(chemical => {
        if (chemical) {
          this.items.push(chemical);
        } else {
          alert('Chemical not found');
        }
      });
    } else {
      this.stash.push(event.key);
    }
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  complete() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.chemService.checkout(userId!, this.items).subscribe(transactionId => {
      this.items = [];
      this.router.navigate(['/checkout-summary'], { queryParams: { transactionId } });
    });
  }

  cancel() {
    this.items = [];
    this.stash = [];
  }

}
