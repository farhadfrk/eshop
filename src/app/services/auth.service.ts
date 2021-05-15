import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDto } from '../DTOs/Account/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(registerData:RegisterDto):Observable<any>{
    return this.http.post<any>('/account/register', registerData);
  }
}
