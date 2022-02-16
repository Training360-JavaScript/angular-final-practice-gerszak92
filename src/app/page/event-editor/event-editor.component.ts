import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit , OnDestroy{
  event: Event = new Event();
  subscriptions: Subscription = new Subscription();

  constructor(
    private eventService: EventService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}


  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
     let subscription =  this.activedRoute.params.pipe(switchMap((param) => this.eventService.get(param['id'])))
    .subscribe(event  => this.event = event);
    this.subscriptions.add(subscription);
  }

  onUpdate(formControl: NgForm){
    console.log(formControl);
    let subscription = this.eventService.update({id: this.event.id,name: formControl.value.name, date: formControl.value.date,time:  formControl.value.time, location: formControl.value.location})
    .subscribe(() => this.router.navigate(['/']));
    this.subscriptions.add(subscription);
  }
}
