import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../app/model/event';

@Injectable()
export class EventServiceMock {

  private list: Event[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: '1 London Rd, London England'
    },
    {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      location: '127 DT , Amsterdam NL'
    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: 'The Palatial America Hotel, Salt Lake City USA'
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: 'The UN Angular Center, New York USA'
    },
  ];

  constructor() { }

  getAll(): Observable<Event[]> {
    return of(this.list);
  }

  get(id: number): Observable<Event> {
    return of(
      this.list.find( event => event.id === id ) || new Event()
    );
  }

  update(event: Event): Observable<Event> {
    return of(event);
  }

}
