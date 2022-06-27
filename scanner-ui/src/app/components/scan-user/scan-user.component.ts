import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types';

@Component({
  selector: 'app-scan-user',
  templateUrl: './scan-user.component.html',
  styleUrls: ['./scan-user.component.scss']
})
export class ScanUserComponent {
  private stash = [] as string[];

  users!: User[];

  constructor(private router: Router, private userService: UserService) { 
    this.userService.getUsers().subscribe(users => this.users = users);
  }
 
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

  choose(user: User) {
    this.router.navigate(['/choose'], { queryParams: { userId: user.id } });
  }

  back() {
    this.router.navigate(['/']);
  }

}


