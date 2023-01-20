import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  public exclusive = new Subject<boolean>();
  public username = new BehaviorSubject<string>("Sajed");

  constructor() { }

  public print(conterValue: any, containerId: any) {
    let element = document.createElement('li');
    if (element) {
      element.innerText = conterValue;
    }

    let elementContainer = document.getElementById(containerId);
    if (elementContainer) {
      elementContainer?.appendChild(element);
    }
  }

}
