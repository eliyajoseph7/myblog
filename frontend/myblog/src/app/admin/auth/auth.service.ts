import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const baseUrl = environment.baseUrl;
const loginUrl = baseUrl + '/auth/login';
const registerUrl = baseUrl + '/auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json', 
    'X-Requested-Width': 'XMLHttpRequeest', 
  });
  constructor(private http: HttpClient) { }


  login(data: any) {
    try {
      return this.http.post(loginUrl, data, {headers: this.headers});
    } catch (e) {
      console.log(e);
      
      return;
    }
  }

  register(data: any) {
    try {
      return this.http.post(registerUrl, data, {headers: this.headers});
    } catch (e) {
      console.log(e);
      return;
    }
  }


  setCredentials(username: string, email: string, name: string, api_token: string) {
    localStorage.setItem('myblogusername', username);
    localStorage.setItem('myblogemail', email);
    localStorage.setItem('myblogname', name);
    localStorage.setItem('myblogtoken', api_token);
  }

  resetCredentials() {
    localStorage.removeItem('myblogusername');
    localStorage.removeItem('myblogemail');
    localStorage.removeItem('myblogname');
    localStorage.removeItem('myblogtoken');
  }

  get isLogedin() {
    if (localStorage.getItem('myblogtoken') === null){
       return false;
    } else {
      return true;
    }
  }
}
