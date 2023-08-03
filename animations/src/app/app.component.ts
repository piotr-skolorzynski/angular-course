import { state, style, trigger } from "@angular/animations";
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
          transform: "translateX(0)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)",
        })
      ),
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
