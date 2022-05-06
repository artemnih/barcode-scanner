import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-user',
  templateUrl: './scan-user.component.html',
  styleUrls: ['./scan-user.component.scss']
})
export class ScanUserComponent {
  private stash = [] as string[];

  constructor(private router: Router) { }
 
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const userBarcode = this.stash.join('');
      // todo: retrieve user info from server
      
      this.stash = [];
      this.router.navigate(['/choose'], { queryParams: { userId: userBarcode } });
    } else {
      this.stash.push(event.key);
    }
  }

  back() {
    this.router.navigate(['/']);
  }

}


