import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private stash = [] as string[];

  constructor(private router: Router) { }

  begin() {
    this.router.navigate(['/scan-user']);
  }

}
