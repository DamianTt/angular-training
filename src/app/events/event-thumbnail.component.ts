import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>{{ event?.date | date }}</div>
      <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">{{event?.time}}</div>
      <div *ngIf="event?.location">{{ event.location.address }}</div>
    </div>
  `,
  styles: [`
  .thumbnail { min-height: 210px; }
  .green { color: #003300 !important;}
  .bold {font-weight: 700;}
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  ngOnInit() {

  }

  logFoo() {
    console.log('foo2');
  }
}
