import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private username:string;
  private clientid = '5a291b64254587511e2e';
  private clientsecret = '221b7fc33936b4e69257c4687215e4c77fddda5f';
  
  constructor(private http:Http) {
    console.log("service is ready!");
    this.username = 'Muriithijoe';
   }

   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()));
   }

   getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()));
   }

   updateUser(username:string){
     this.username = username;
   }

   
}
