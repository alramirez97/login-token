import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  user: User = {
    username: '',
    email:'',
    password: '',
    token: ''
  }
  
  constructor(
    private authService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      )
  }

}
