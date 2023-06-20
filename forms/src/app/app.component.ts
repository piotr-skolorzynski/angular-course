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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName(signupForm: NgForm) {
    const suggestedName = 'Superuser';

    signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(signupForm: NgForm) {
    this.submitted = true;

    this.user.username = signupForm.value.userData.username;
    this.user.email = signupForm.value.userData.email;
    this.user.secretQuestion = signupForm.value.secret;
    this.user.answer = signupForm.value.questionAnswer;
    this.user.gender = signupForm.value.gender;
  }
}
