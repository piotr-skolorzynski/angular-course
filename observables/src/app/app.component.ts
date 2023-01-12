import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmmiter.subscribe(
      (didActivated) => {
        this.userActivated = didActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
