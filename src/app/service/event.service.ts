import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl: string = environment.apiUrl;

  endpoint: string = 'events';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}${this.endpoint}`);
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}${this.endpoint}/${id}`);
  }

  update(event: Event): Observable<Event> {
    return this.http.patch<Event>(
      `${this.apiUrl}${this.endpoint}/${event.id}`,
      event,
    );
  }
}
