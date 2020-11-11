import { Component,  OnInit } from '@angular/core';
//import { UserProfileService } from '../user-profile.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
 

  InputUser=false;
  ndf=false;
  showasinput = {
    id:-1,
    flag:false
  };
  toggle_on_edit = {
    id:-1,
    flag:true
  };
  userInfo = [];
  tempuser =[]
  constructor(private userService:UserProfileService){}

  ngOnInit(): void {
    this.userInfo = this.userService.provideUser(); 
    this.tempuser = this.userInfo;
  }
  Showadduserinput(event){
    this.InputUser = true;
  }
   Hideadduserinput(){
     this.InputUser = false;
   }
  SubmitUser(event,user){
    console.log("User Submitted",user);
    this.userInfo.unshift(user)
  }
  filter(param,name){
      if(!param)
      this.userInfo = this.tempuser;
      else{
      switch(name){
        case "ID":
          let user = this.userInfo.filter(
            function(user){
             return user.Id===parseInt(param)})
             if(user.length==0) 
              this.ndf=true;
              this.userInfo = user
            break;
        case "FirstName":
          let user1 = this.userInfo.filter(
            function(user){
             return user.FirstName.includes(param)
            })
            if(user1.length==0) 
              this.ndf=true;
            this.userInfo = user1
            break;
        case "LastName":
          let user2 = this.userInfo.filter(
            function(user){
             return user.LastName.includes(param)
            })
            if(user2.length==0) 
              this.ndf=true;
            this.userInfo = user2
            break;
        case "Username":
          let user3 = this.userInfo.filter(
            function(user){
             return user.Username.includes(param)
            })
            if(user3.length==0) 
              this.ndf=true;
            this.userInfo = user3
            break;
        case "Email":
          let user4 = this.userInfo.filter(
            function(user){
             return user.email.includes(param)
            })
            if(user4.length==0) 
              this.ndf=true;
            this.userInfo = user4
            break;
        case "Age":
          let user5 = this.userInfo.filter(
            function(user){
             return user.age===parseInt(param)
            })
            if(user5.length==0) 
              this.ndf=true;
            this.userInfo = user5
            break;
      }
    }
  }
  deleteuser(Id){
    var flag = confirm("Are you sure you want to delete?")
    if(flag){
      //this.userInfo.reduce(user)
      let user = this.userInfo.filter((user)=> user.Id!==parseInt(Id))
      this.userInfo = user;
    }
  }
  edituser(Id){
    this.showasinput.id = Id;
     this.showasinput.flag = true;
     this.toggle_on_edit.flag = false;
     
  }
  toggleshowasinput(){
    this.showasinput.flag = !this.showasinput.flag
  }
  saveuser(){
    this.showasinput.flag=!this.showasinput.flag
  }
}
