import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/user';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'token',
    'userid':'1'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000';
  constructor(
              private http: HttpClient, 
              private router: Router,
              private activatedRoiuter:ActivatedRoute
  ) { }
  

  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', user);
  }

  signInUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signin', user);
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
