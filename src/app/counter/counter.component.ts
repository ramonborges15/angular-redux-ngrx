import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, SetName } from '../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public counter$: Observable<any>;

  constructor(private store: Store<{ counter: number }>) { 

  }

  ngOnInit() {
    this.counter$ = this.store.pipe(
      select('reducer')
    )
  }

  decrement() {
    this.store.dispatch(new Decrement())
  }

  increment() {
    this.store.dispatch(new Increment())
  }

  setName() {
    this.store.dispatch(SetName('Novo Nome'))
  }
}
