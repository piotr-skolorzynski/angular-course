import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval;
  lastnumber = 0;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber += 1;
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
  }
}
