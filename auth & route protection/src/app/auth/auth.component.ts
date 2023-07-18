import { Component } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogginngMode = true;

  onSwitchMode() {
    this.isLogginngMode = !this.isLogginngMode;
  }
}
