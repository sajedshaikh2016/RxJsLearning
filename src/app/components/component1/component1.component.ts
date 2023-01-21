import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

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
