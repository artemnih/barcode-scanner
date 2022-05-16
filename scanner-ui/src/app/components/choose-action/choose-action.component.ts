import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose-action',
  templateUrl: './choose-action.component.html',
  styleUrls: ['./choose-action.component.scss']
})
export class ChooseActionComponent {
  user!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.queryParams.userId;
  }

  checkout() {
    this.router.navigate(['/checkout'], {
      queryParams: {
        userId: this.activatedRoute.snapshot.queryParams.userId
      }
    });
  }

  checkin() {
    this.router.navigate(['/checkin'], {
      queryParams: {
        userId: this.activatedRoute.snapshot.queryParams.userId
      }
    });
  }
}
