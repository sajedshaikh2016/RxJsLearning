import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addButton') addButton!: ElementRef;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count: number = 1;
    fromEvent(this.addButton.nativeElement, 'click').subscribe(response => {
      let conterValue = 'Video ' + count++;
      console.log(conterValue);
      this._designUtilityService.print(conterValue, 'elementContainer');
    });
  }



}
