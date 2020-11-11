import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent{

  // Bar graph 
  public barChartOptions:any= {
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true, ticks: { fontColor: '#e0e0e0'}, 
        gridLines: { color: '#282828'}
      }],
      yAxes: [{
        stacked: true, ticks: { fontColor: '#e0e0e0', min: 0,
        beginAtZero: true},
        gridLines: { color: '#282828'},
      }]
    },
    legend: { labels: {
        fontColor: '#E0E0E0'
        }
      }
    }
      
  public barChartType= 'horizontalBar';

  public barChartLegend = true;

  public barChartLabels: string[] = ['Open Positions', 'Applicants', 'Scheduled Interviews', 'Evaluated', 'Closed'];

  public barChartData = [
    { data: [10, 20, 30, 40, 50], label: 'Series A'},
  ];

  public barChartColors = [{
    backgroundColor:'rgba(175, 227, 19,1)'}
  ];

  // Doughnut 
  public doughnutChartLabels = ['Open Positions', 'Applicants', 'Scheduled Interviews', 'Evaluated', 'Closed'];

  public doughnutChartData = [
    { data: [20, 20, 30, 10, 30], label: 'Series A'}
  ];

  public doughnutChartType = 'doughnut';

  public doughnutChartOptions= {legend: {position: "right",labels: {fontColor: '#E0E0E0'}}, cutoutPercentage: 80, 
  };

  public doughnutChartColors = [{
    backgroundColor : ["#b9e52f","#9fdef1","#2a5d78", "#f6aa54", "#f7da52"],borderColor : ["#b9e52f","#9fdef1","#2a5d78","#f6aa54","#f7da52"],
    }
  ];

  // Doughnut Click events

  onClick1() {
    this.barChartData = [
      { data: [12, 20, 30, 40, 50], label: 'Series A'},
    ];
  }

  onClick2() {
    this.barChartData = [
      { data: [50, 40, 30, 20, 15], label: 'Series B'},
    ];
  }

  onClick3() {
    this.barChartData = [
      { data: [50, 22, 50, 23, 30], label: 'Series C'},
    ];
  }

  onClick4() {
    this.barChartData = [
      { data: [11, 40, 20, 50, 10], label: 'Series D'},
    ];
  }

  onClick5() {
    this.barChartData = [
      { data: [30, 40, 30, 14, 50], label: 'Series E'},
    ];
  }


  // Horizontal graph click events
  Click1() {
    this.doughnutChartData = [
      { data: [20, 20, 30, 10, 5], label: 'Series A'},
    ];
  }
  Click2() {
    this.doughnutChartData = [
      { data: [60, 20, 30, 20, 10], label: 'Series B'},
    ];
  }
  Click3() {
    this.doughnutChartData = [
      { data: [10, 20, 10, 5, 50], label: 'Series C'},
    ];
  }
  Click4() {
    this.doughnutChartData = [
      { data: [10, 50, 30, 10, 5], label: 'Series D'},
    ];
  }
  Click5() {
    this.doughnutChartData = [
      { data: [30, 20, 50, 30, 20], label: 'Series E'},
    ];
  }


  constructor() { }

  ngOnInit() {
  }
}
  // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }



