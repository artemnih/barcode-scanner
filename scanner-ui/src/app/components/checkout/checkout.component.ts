import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private stash = [] as string[];
  public items = [] as string[];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.items.push(this.stash.join(''));
      this.stash = [];
    } else {
      this.stash.push(event.key);
    }
  }

  removeItem(item: string) {
    this.items = this.items.filter(i => i !== item);
  }

  complete() {
    this.items = [];
    // todo: send to server
  }

}
