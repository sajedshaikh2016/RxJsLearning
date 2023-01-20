import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  public username: string = '';

  constructor(private _designUtilityService: DesignUtilityService) {
    this._designUtilityService.username.subscribe(res => {
      this.username = res;
    });
  }

  ngOnInit(): void {
    this._designUtilityService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUtilityService.exclusive.next(false);
  }

}
