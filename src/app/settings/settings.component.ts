import { CandidatesService } from './../services/candidates.service';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public candidates = [];
  constructor(private _candidateService: CandidatesService) { }

  ngOnInit(): void {
    this.candidates = this._candidateService.getCandidates();
  }
  
}

