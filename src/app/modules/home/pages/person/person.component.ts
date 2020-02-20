import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  canvas: any;
  ctx: any;

  constructor() { }
  
// https://www.cpdp.bg/?p=element&aid=424
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
 
    var stackedLine = new Chart(this.ctx, {
      type: 'line',
      data: [20, 10],
      options: {
          scales: {
              yAxes: [{
                  stacked: true
              }]
          }
      }
    });
  
  }

}
