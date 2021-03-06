import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  // @Input() filterBy: string;
  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges() {
  //   if (this.sessions) {
  //     this.filterSessions(this.filterBy);
  //   }
  // }

  // filterSessions(filter) {
  //   if (filter === 'all') {
  //     this.visibleSessions = this.sessions.slice(0);
  //   } else {
  //     this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter)
  //   }
  // }

}
