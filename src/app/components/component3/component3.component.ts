import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {

  public username: string = '';

  constructor(private _designUtilityService: DesignUtilityService) {
    this._designUtilityService.username.subscribe(res => {
      this.username = res;
    });
  }

  public onClick(inputusername: any) {
    this._designUtilityService.username.next(inputusername.value)

  }

}
