import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        //condition to complete Observable
        if (count === 4) {
          observer.complete();
          return clearInterval(interval);
        }

        if (count > 8) {
          observer.error(new Error('Count is greater than 3!')); //throwing error if sth wrong happened
          return clearInterval(interval);
        }

        observer.next(count); //next -> emiting data
        count += 1;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(data); //1. callback to handle incoming data
      },
      (error) => {
        console.log(error); //2. callback to handle incoming errors
      },
      () => {
        console.log('Completed!'); //3. callback to handle things after the observable is completed. Time for cleaning up, etc.
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
