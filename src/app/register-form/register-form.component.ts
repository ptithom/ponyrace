import { Component, OnInit } from '@angular/core';


class User {
  username: string;
  password: string;
}

@Component({
  selector: 'pr-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user = new User();

  register() {
    console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}
