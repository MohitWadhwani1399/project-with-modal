import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal,NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  userInfo:any;
  tempuser =[];
  tuser:any;
  modalOptions:NgbModalOptions;
  modalRef: NgbModalRef;
  editProfileForm: FormGroup;
  constructor(private http:HttpClient,private modalService: NgbModal,private userService:UserProfileService){}

  ngOnInit(): void {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    this.userInfo = this.userService.provideUser(); 
    this.tempuser = this.userInfo;
  }
  openModal(content,user:any,i:any) {
    this.tuser = user
    this.index = i
    console.log("Open Model",user,i);  
    this.modalRef = this.modalService.open(content,{centered:true});
    //this.modalRef.componentInstance.user = user;
    //console.log();
    
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
      //console.log(typeof param);
      let param1 = param.toUpperCase()
      let param2 = param.toLowerCase()
      if(!param)
      this.userInfo = this.tempuser;
      else{
      switch(name){
        case "GPGID":
          let user = this.userInfo.filter(
            function(user){
             return (user.gpgid.includes(param1) || user.gpgid.includes(param2))
            })
             if(user.length==0) 
              this.ndf=true;
              this.userInfo = user
            break;
        case "Name":
          let user1 = this.userInfo.filter(
            function(user){
             return (user.candidateName.includes(param1) || user.candidateName.includes(param2))
            })
            if(user1.length==0) 
              this.ndf=true;
            this.userInfo = user1
            break;
        case "Team":
          let user2 = this.userInfo.filter(
            function(user){
             return (user.team.includes(param1) || user.team.includes(param2))
            })
            if(user2.length==0) 
              this.ndf=true;
            this.userInfo = user2
            break;
        case "Skills":
          let user3 = this.userInfo.filter(
            function(user){
             return (user.skills.includes(param1) || user.skills.includes(param2))
            })
            if(user3.length==0) 
              this.ndf=true;
            this.userInfo = user3
            break;
        case "Designation":
          let user4 = this.userInfo.filter(
            function(user){
             return (user.designation.includes(param1) || user.designation.includes(param2))
            })
            if(user4.length==0) 
              this.ndf=true;
            this.userInfo = user4
            break;
        case "Status":
          let user5 = this.userInfo.filter(
            function(user){
              return (user.status.includes(param1) || user.status.includes(param2))
            })
            if(user5.length==0) 
              this.ndf=true;
            this.userInfo = user5
            break;
      }
    }
  }
  deleteuser(id){
    console.log(typeof id);
    
    var flag = confirm("Are you sure you want to delete?")
    if(flag){
        this.http.delete('https://mp-webapp-dev.azurewebsites.net/api/HiringMaster/'+id)
        .subscribe(res=>{
          this.userInfo = res;
          console.log(this.userInfo);
          
          return this.userInfo;
        })
    }
  }
  edituser(user){
    console.log("user");
    // this.userInfo.forEach(User=>{
    //   if(User.lookupCandidateId==user.lookupCandidateId){
    //     let index = this.userInfo.indexOf(User)
    //     this.userInfo[index] = user
    //   }
    // })
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
