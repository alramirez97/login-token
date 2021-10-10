import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private authservice: LoginService,
  ) { }
  /*intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }*/
}
