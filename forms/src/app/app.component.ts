import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName(signupForm: NgForm) {
    const suggestedName = 'Superuser';

    signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
