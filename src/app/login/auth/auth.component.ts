import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from '../models/jwt-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  jwtoken: JwtResponse = {
    username: '',
    email:'',
    password: '',
    token: '',
    expira: ''
  }
  
  constructor(
    private authService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  signIn() {
    this.authService.signInUser(this.jwtoken)
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
