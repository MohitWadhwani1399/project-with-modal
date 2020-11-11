import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from '../services/user-profile.service';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(private modalService: NgbModal,private userService:UserProfileService) { }
  closeResult: string;
  modalOptions:NgbModalOptions;
  userInfo=[]
  ngOnInit(): void {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    this.userInfo = this.userService.provideUser();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
