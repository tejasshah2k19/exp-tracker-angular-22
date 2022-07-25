import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }

  signupApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9999/register",data)
  }

}
