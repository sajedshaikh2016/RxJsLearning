import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableComponent } from './observable.component';
import { RouterModule } from '@angular/router';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: ComponentFixture<ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [ ObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
