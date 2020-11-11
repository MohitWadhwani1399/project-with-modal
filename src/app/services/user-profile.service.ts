import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user:any;
  constructor() {
    this.user = [
      {
        Id:1,
        FirstName:"Mohit",
        LastName:"Wadhwani",
        Username:"MW",
        email:"m@gmail.com",
        age:21
      },
      {
        Id:2,
        FirstName:"Nalam",
        LastName:"Lokhi",
        Username:"NL",
        email:"n@gmail.com",
        age:21
      },
      {
        Id:3,
        FirstName:"Kshitij",
        LastName:"Srivastava",
        Username:"k_",
        email:"k@gmail.com",
        age:21
      },
      {
        Id:4,
        FirstName:"Sriyansh",
        LastName:"Jain",
        Username:"SJ",
        email:"s@gmail.com",
        age:21
      },
      {
        Id:5,
        FirstName:"Riya",
        LastName:"Singh",
        Username:"RS",
        email:"r@gmail.com",
        age:21
      }
    ]
   }

   provideUser(){
     return this.user;
   }
}
