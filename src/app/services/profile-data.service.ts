import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
   profile:any;
   
  getProfileData(){
   return this.profile;
  }
  constructor() {
    this.profile={
      name:"Riya Singh",
      image:"https://randomuser.me/api/portraits/women/65.jpg"
    }
   }
}
