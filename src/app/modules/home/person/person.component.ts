import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';
import * as Chart from 'chart.js'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: Person = this.route.snapshot.data.person;
  canvas: any;
  ctx: any;

  constructor(private route: ActivatedRoute) { }
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
