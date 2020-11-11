import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
  
})
export class SearchComponent implements OnInit {
form: FormGroup;
  levels = [
    "TECH Round1",
    "TECH Round2",
    "HR Round"
  ];
  status = [
    "Selected",
    "Rejected",
    "Pending"
  ];
  location=[
    "Hyderabad","Bengaluru","Mumbai", "Delhi","Pune"
  ];

@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';
constructor(private fb: FormBuilder,
private userService: UserService) {
  
}
ngOnInit(): void {
this.buildForm();
}
buildForm(): void {
this.form = this.fb.group({
GPGID: new FormControl(''),
firstName: new FormControl(''),
lastName: new FormControl(''),
jobTitle: new FormControl(''),
status: new FormControl(''),
level: new FormControl(''),
location: new FormControl(''),
date: new FormControl('')

});
}

 search(filters: any): void {
Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
this.groupFilters.emit(filters);
}
  
}



