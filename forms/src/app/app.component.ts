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

  suggestUserName(form: NgForm) {
    const suggestedName = 'Superuser';
    form.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = form.form.value.userData.username;
    this.user.email = form.form.value.userData.email;
    this.user.secretQuestion = form.form.value.secret;
    this.user.answer = form.form.value.questionAnswer;
    this.user.gender = form.form.value.gender;

    form.reset();
  }
}
