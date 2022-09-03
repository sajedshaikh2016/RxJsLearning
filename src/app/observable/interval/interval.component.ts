import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  public observableMessage: any;
  public videoSubscription!: Subscription;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    // timer(delay, interval);
    const broadCastVideos = timer(3000, 1000);

    this.videoSubscription = broadCastVideos.subscribe(response => {
      console.log(response);
      this.observableMessage = 'Video ' + response;
      this._designUtilityService.print(this.observableMessage, 'element-container-1')
      this._designUtilityService.print(this.observableMessage, 'element-container-2')
      this._designUtilityService.print(this.observableMessage, 'element-container-3')

      if (response >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }

}
