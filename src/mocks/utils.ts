import { interval, take } from 'rxjs';
import { Component } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";

export interface IFixtureComponent extends Component {
  [key: string]: any;
}

export const callTester = (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLElement,
  methodName: string,
  expector: any
): void => {
  const component: IFixtureComponent = fixture.componentInstance;

  jest.spyOn(component, methodName);

  const element = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  element.click();
  fixture.detectChanges();

  fixture.whenStable().then( () => {
    expector(component[methodName]).toHaveBeenCalled();
  });
};

export const getElements = (
  fixture: ComponentFixture<IFixtureComponent>,
  selector: string,
): NodeListOf<HTMLElement> => {
  return (fixture.debugElement.nativeElement as HTMLElement).querySelectorAll(
    selector
  );
};

export const waitUntil = async (untilTruthy: Function): Promise<boolean> => {
  while (!untilTruthy()) {
    await interval(25).pipe(take(1)).toPromise();
  }
  return Promise.resolve(true);
};
