import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user:any;
  constructor(http:HttpClient) {
    http.get('https://hiringportald1.azurewebsites.net/api/HiringMaster')
    .subscribe(res=>{
      this.user = res;
      console.log(this.user);
      
    })
   }

   provideUser(){
     return this.user;
   }
}
