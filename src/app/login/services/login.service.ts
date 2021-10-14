import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { JwtResponse } from '../models/jwt-response';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000';
  constructor(
              private http: HttpClient, 
              private router: Router,
  ) { }
  

  signInUser(jwtoken: JwtResponse): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.URL + '/signin', jwtoken);
  }

  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
