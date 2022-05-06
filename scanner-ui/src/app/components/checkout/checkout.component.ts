import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ChemicalsService } from 'src/app/services/chemicals.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private stash = [] as string[];
  public items = [] as string[];

  constructor(private chemService: ChemicalsService, private router: Router) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {

      const barcode = this.stash.join('');
      this.stash = [];

      this.chemService.getInfo(barcode).subscribe(chemical => {
        if (chemical) {
          this.items.push(chemical.name);
        } else {
          alert('Chemical not found');
        }
      });
    } else {
      this.stash.push(event.key);
    }
  }

  removeItem(item: string) {
    this.items = this.items.filter(i => i !== item);
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  complete() {
    this.chemService.checkout(this.items).subscribe(() => {
      this.items = [];
      this.router.navigate(['/thankyou']);
    });
  }

  cancel() {
    this.items = [];
    this.stash = [];
  }

}
