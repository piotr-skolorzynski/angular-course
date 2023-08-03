import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "translateX(0) scale(1)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px) scale(1)",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "translateX(0) scale(0.5)",
        })
      ),
      //dla obu kierunków
      // transition("normal <=> highlighted", animate(300)),
      transition("normal => highlighted", animate(800)),
      //* oznacza dowolny stan
      transition("shrunken <=> *", animate(500)),
    ]),
  ],
})
export class AppComponent {
  list = ["Milk", "Sugar", "Bread"];
  state = "normal";

  onAnimate() {
    if (this.state === "normal") {
      this.state = "highlighted";
      return;
    }

    this.state = "normal";
  }

  onAdd(item) {
    this.list.push(item);
  }
}
