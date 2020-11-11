import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  
   current_progress : number=0;
  display:boolean;
  constructor(private renderer: Renderer2) {
    this.display=true;
    this.current_progress=10;
    this.makeProgress();
   
   }
 
  ngOnInit(): void {
   
   
     
  }

   makeProgress(){
    var x = setInterval(() => { 
       this.current_progress += 10;
   
   
    
      if (this.current_progress >= 100)
     {    this.display=false; 
      clearInterval(x); 
     }    
        }, 1000);
  
   }
}
