import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  public observableMessage: any;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    // OF - Strings
    const observable1 = of('Sajed', 'Salim', 'Shaikh');

    observable1.subscribe(response => {
      console.log(response);
      this._designUtilityService.print(response, 'element-container-1');
    });


    // OF - Object
    const observable2 = of({ a: 'Sajed', b: 'Salim', c: 'Shaikh' });

    observable2.subscribe(response => {
      this.observableMessage = response;
      console.log(this.observableMessage);

    });

    // FROM - Array
    const observable3 = from(['Sajed', 'Salim', 'Shaikh']);
    observable3.subscribe(response => {
      console.log(response);
      this._designUtilityService.print(response, 'element-container-3')
    });

    // FROM - Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promise resolved.");
      }, 3000);
    });

    const observable4 = from(promise);
    observable4.subscribe(response => {
      console.log(response);
      this._designUtilityService.print(response, 'element-container-4')
    });

    // FROM - String
    const observable5 = from("This is string.");
    observable5.subscribe(response => {
      console.log(response);
      this._designUtilityService.print(response, 'element-container-5')
    });


  }

}
