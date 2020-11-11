import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../services/profile-data.service';
@Component({
  selector: 'app-profile-buttton',
  templateUrl: './profile-buttton.component.html',
  styleUrls: ['./profile-buttton.component.scss']
})
export class ProfileButttonComponent implements OnInit {
   
  profileData:any;
  constructor(profileDataservice:ProfileDataService) {
    this.profileData=profileDataservice.getProfileData();
   }

  ngOnInit(): void {
  }

}
