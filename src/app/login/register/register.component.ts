import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    email:'',
    password: '',
    rol: ''
  }

  constructor(
    private authService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(
    
  ): void {
  }
  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/signin']);
        },
        err => console.log(err)
      )
  }

}
