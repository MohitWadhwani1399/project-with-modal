import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  constructor() { }

  getCandidates(){
    return [
      {
        Id:1,
        Name:"Mohit Wadhwani",
        Role: "UI Developer",
        email:"mw@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot4"
      },
      {
        Id:2,
        Name:"Nalam Lokhi",
        Role: "UI Developer",
        email:"nl@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot3"
      },
      {
        Id:3,
        Name:"Kshitij Srivastava",
        Role: "UI Developer",
        email:"ks@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot2"
      },
      {
        Id:4,
        Name:"Sriyansh Jain",
        Role: "UI Developer",
        email:"sj@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot6"
      },
      {
        Id:5,
        Name:"Riya Singh",
        Role: "UI Developer",
        email:"rs@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot4"
      },
      {
        Id:6,
        Name:"Shreya Singh",
        Role: "UI Developer",
        email:"ss@gmail.com",
        Level: "Final",
        Date: "9-11-2020",
        Slot: "Slot5"
      }
    ];
  }
}
