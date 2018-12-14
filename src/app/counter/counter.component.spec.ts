import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let componentDOM : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    componentDOM = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have counter as 1 at start', () => {
    let span = componentDOM.querySelector('span');
    expect(span.innerHTML).toBe('1');
    expect(component.counter).toBe(1);
  });

  it('should increment properly', () => {
    let span = componentDOM.querySelector('span');
    component.increment();
    fixture.detectChanges();
    expect(span.innerHTML).toBe('2');
    expect(component.counter).toBe(2);
  });

  it('should decrement properly', () => {
    let span = componentDOM.querySelector('span');
    component.decrement();
    fixture.detectChanges();
    expect(span.innerHTML).toBe('0');
    expect(component.counter).toBe(0);
  });
});
