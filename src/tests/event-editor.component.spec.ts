import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import {
  EventEditorComponent
} from 'src/app/page/event-editor/event-editor.component';
import { EventService } from 'src/app/service/event.service';
import { EventServiceMock } from 'src/mocks/event.service.mock';
import { getElements } from 'src/mocks/utils';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EventEditorComponent', () => {
  let component: EventEditorComponent;
  let fixture: ComponentFixture<EventEditorComponent>;
  let injectedService: EventService;
  let eventServiceGetSpy: jest.SpyInstance<any, any>;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEditorComponent ],
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
            params: of({id: 1})
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeAll(() => {
    fixture = TestBed.createComponent(EventEditorComponent);
    component = fixture.componentInstance;
    eventServiceGetSpy =
      jest.spyOn<EventService, any>(component.eventService, 'get');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('EventService.get should be called', async () => {
    await fixture.whenStable();
    expect(eventServiceGetSpy).toBeCalled();
  });

  it('form should contain a name field', async () => {
    const inputs = getElements(fixture, 'form input[name="name"]');
    await fixture.whenStable();
    expect(inputs.length > 0).toBeTruthy();
    expect((inputs[0] as HTMLInputElement).value).toMatch(/Angular *Connect/i);
  });

  it('form should contain a date field', async () => {
    const inputs = getElements(fixture, 'form input[name="date"]');
    await fixture.whenStable();
    expect(inputs.length > 0).toBeTruthy();
    expect((inputs[0] as HTMLInputElement).value).toMatch(/9\/26\/2036/i);
  });

  it('form should contain a time field', async () => {
    const inputs = getElements(fixture, 'form input[name="time"]');
    await fixture.whenStable();
    expect(inputs.length > 0).toBeTruthy();
    expect((inputs[0] as HTMLInputElement).value).toMatch(/10am/i);
  });

  it('form should contain a location field', async () => {
    const inputs = getElements(fixture, 'form input[name="location"]');
    await fixture.whenStable();
    expect(inputs.length > 0).toBeTruthy();
    expect((inputs[0] as HTMLInputElement).value).toMatch(
      /1 London Rd, London England/i
    );
  });


});
