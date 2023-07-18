import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.servcie";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogginngMode = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLogginngMode = !this.isLogginngMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.isLogginngMode) {
      return;
    }

    this.authService.signup(form.value.email, form.value.password).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        console.log(error);
      }
    );
    form.reset();
  }
}
