import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, ResolveEnd } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Spinner} from 'spin.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faceRec';
  routerEvent$;
  persons: Person[] = this.route.snapshot.data.persons;
  
  @ViewChild('spinner', {static: true}) target: ElementRef;
  spinner;
  opts = {
    lines: 13, // The number of lines to draw
    length: 38, // The length of each line
    width: 17, // The line thickness
    radius: 45, // The radius of the inner circle
    scale: 1, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: '#999DA0', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    speed: 1, // Rounds per second
    rotate: 0, // The rotation offset
    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: 'spinner', // The CSS class to assign to the spinner
    top: '50%', // Top position relative to parent
    left: '50%', // Left position relative to parent
    shadow: '0 0 1px transparent', // Box-shadow for the lines
    position: 'absolute' // Element positioning
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
       this.spinner = new Spinner(this.opts);
     }

  ngOnInit() {
     this.routerEvent$ = this.router.events
    .subscribe( (e) => {
      if(e instanceof NavigationStart) {
        this.spinner.spin(this.target.nativeElement)
      }
      if(e instanceof NavigationEnd) {
        this.spinner.stop();
      }
    });
  }
  
  

  ngOnDestroy() {
    this.routerEvent$.unsubscribe();
  }
}
