import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types';

@Component({
  selector: 'app-choose-action',
  templateUrl: './choose-action.component.html',
  styleUrls: ['./choose-action.component.scss']
})
export class ChooseActionComponent {
  user!: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    const userId = this.activatedRoute.snapshot.queryParams.userId;
    this.userService.getUser(userId).subscribe(user => (this.user = user));
  }

  checkout() {
    this.router.navigate(['/checkout'], {
      queryParams: {
        userId: this.user.id
      }
    });
  }

  checkin() {
    this.router.navigate(['/checkin'], {
      queryParams: {
        userId: this.user.id
      }
    });
  }
}
