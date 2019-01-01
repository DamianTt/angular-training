import { Routes } from '@angular/router';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list.component';
import { CreateEventComponent } from './app/events/create-event/create-event.component';
import { Error404Component } from './app/errors/error404/error404.component';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';
import { EventsListResolverService } from './app/events/events-list-resolver.service';
import { UserModule } from './app/user/user.module';
import { CreateSessionComponent } from './app/events/event-details/create-session/create-session.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } }, // preloaded data
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => UserModule }
];
