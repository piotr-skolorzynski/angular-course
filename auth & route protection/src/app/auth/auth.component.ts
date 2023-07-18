import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogginngMode = true;

  onSwitchMode() {
    this.isLogginngMode = !this.isLogginngMode;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
