import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

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
