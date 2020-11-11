import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
//import { UserProfileService } from '../user-profile.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
 
  index;
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
  tempuser =[];
  tuser:any;
  modalOptions:NgbModalOptions;
  editProfileForm: FormGroup;
  constructor(private modalService: NgbModal,private userService:UserProfileService){}

  ngOnInit(): void {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    // this.editProfileForm = this.fb.group({
    //   firstname: [''],
    //   lastname: [''],
    //   username: [''],
    //   email: ['']
    //  });
    this.userInfo = this.userService.provideUser(); 
    this.tempuser = this.userInfo;
  }
  openModal(content,user,i) {
    this.tuser = user
    this.index = i
    //console.log("Open Model",user,i);  
    const modalRef = this.modalService.open(content,{centered:true});
    //modalRef.componentInstance.name = 'World';
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
  edituser(user){
    console.log(user);
    this.userInfo.forEach(User=>{
      if(User.Id==user.Id){
        let index = this.userInfo.indexOf(User)
        this.userInfo[index] = user
      }
    })
    console.log(this.userInfo);
    this.modalService.dismissAll()
  }
  toggleshowasinput(){
    this.showasinput.flag = !this.showasinput.flag
  }
  saveuser(){
    this.showasinput.flag=!this.showasinput.flag
  }
}
