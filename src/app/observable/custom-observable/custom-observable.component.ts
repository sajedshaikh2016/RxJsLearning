import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  public technologyStatus1: any;

  public subscription2!: Subscription;
  public technologyStatus2: any;

  public names!: string;
  public namesStatus: any;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnDestroy(): void {
    this.subscription2.unsubscribe();
  }

  ngOnInit(): void {

    // Example - 01 (Manual)
    const customObservable1 = new Observable((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);

      setTimeout(() => {
        observer.next('JavaScript');
      }, 3000);

      setTimeout(() => {
        observer.next('HTML5');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);

      setTimeout(() => {
        observer.next('CSS3');
        observer.complete();
      }, 5000);
    });

    customObservable1.subscribe({
      next: (response) => {
        console.log("customObservable1", response);
        this._designUtilityService.print(response, 'elementContainer1');
      },
      error: (error) => {
        this.technologyStatus1 = 'error';
      },
      complete: () => {
        this.technologyStatus1 = 'completed';
      }
    });




    // Example - 02 (Custom Interval)
    const array2 = ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'];
    const customObservable2 = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(array2[count]);

        // if (count >= 3) {
        //   observer.error(new Error('Limit Exceed'));
        // }

        if (count >= 4) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    this.subscription2 = customObservable2.subscribe({
      next: (response) => {
        console.log("customObservable2", response);
        this._designUtilityService.print(response, 'elementContainer2');
      },
      error: (error) => {
        this.technologyStatus2 = 'error';
      },
      complete: () => {
        this.technologyStatus2 = 'completed';
      }
    });




    // Example - 03 (Random Names)
    const array3 = ['Sajed', 'Salim', 'Shaikh'];
    const customObservable3 = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(array3[count]);

        // if (count >= 1) {
        //   observer.error(new Error('Limit Exceed'));
        // }

        if (count >= 2) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    customObservable3.subscribe({
      next: (response) => {
        console.log("customObservable3", response);
        this.names = response;
      },
      error: (error) => {
        this.namesStatus = 'error';
      },
      complete: () => {
        this.namesStatus = 'completed';
      }
    });




  }

}
