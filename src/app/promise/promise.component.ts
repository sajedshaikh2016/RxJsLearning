import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  public promiseValue: any;
  public buyLaptop: any;

  constructor() { }

  ngOnInit(): void {
    this.promiseMethod();
  }

  public promiseMethod() {
    this.buyLaptop = new Promise((resolve, reject) => {
      if (this.MacBookAirAvailble()) {
        return setTimeout(() => {
          resolve("MacBook Air is purchased.");
        }, 3000);
      } else if (this.MacBookProAvailble()) {
        return setTimeout(() => {
          resolve("MacBook Pro is purchased.");
        }, 3000);
      } else {
        return setTimeout(() => {
          reject("MacBooks are not available in apple store!");
        }, 3000);
      }
    });

    this.buyLaptop.then((response: any) => {
      console.log("then code =>", response);
      this.promiseValue = response;
    }).catch((response: any) => {
      console.log("catch code =>", response);
      this.promiseValue = response;
    });
  }

  public MacBookAirAvailble() {
    return false;
  }

  public MacBookProAvailble() {
    return true;
  }

}
