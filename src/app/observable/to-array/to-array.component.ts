import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  public users = [
    { name: 'Sajed', skill: 'Angular' },
    { name: 'Salim', skill: 'HTML5, CSS3' },
    { name: 'Shaikh', skill: 'TypeScript' }
  ];
  public sourceSubscribe1!: Subscription;
  public sourceSubscribe2!: Subscription;
  public sourceSubscribe3!: Subscription;

  constructor() { }

  ngOnInit(): void {

    // Example - 01
    const source1 = interval(1000);
    this.sourceSubscribe1 = source1.pipe(take(5), toArray()).subscribe(response => {
      console.log(response);
    })

    // Example - 02 
    const source2 = from(this.users);
    this.sourceSubscribe2 = source2.pipe(toArray()).subscribe(response => {
      console.log(response);
    })

    // Example - 03
    const source3 = of('Sajed', 'Salim', 'Shaikh');
    this.sourceSubscribe3 = source3.pipe(toArray()).subscribe(response => {
      console.log(response);
    })

  }

}
