import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import {
  EventEditorComponent
} from 'src/app/page/event-editor/event-editor.component';
import { EventService } from 'src/app/service/event.service';
import { EventServiceMock } from 'src/mocks/event.service.mock';
import { callTester, getElements } from 'src/mocks/utils';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('EventEditorComponent', () => {
  let component: EventEditorComponent;
  let fixture: ComponentFixture<EventEditorComponent>;
  let eventServiceUpdateSpy: jest.SpyInstance<any, any>;
  let componentPrototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventEditorComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        {
          provide: EventService,
          useClass: EventServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEditorComponent);
    component = fixture.componentInstance;

    const service = Object.getOwnPropertyDescriptors(component)['eventService']
      .value;
    eventServiceUpdateSpy =
      jest.spyOn<EventService, any>((service as EventService), 'update');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form save button should exist', async () => {
    await fixture.whenStable();
    let submitButton = fixture.debugElement.query(By.css('button'));
    expect(submitButton).toBeTruthy();
  });

  it('onUpdate should be called when someone clicks on the save button', async () => {
    await fixture.whenStable();
    callTester(fixture, 'form button', 'onUpdate', expect);
  });

  it('onUpdate should be called when someone clicks the save button', async () => {
    await fixture.whenStable();
    callTester(fixture, 'form button', 'onUpdate', expect);
    fixture.detectChanges();
    expect(eventServiceUpdateSpy).toBeCalled();
  });

});
