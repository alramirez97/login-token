import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authservice: LoginService,
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
