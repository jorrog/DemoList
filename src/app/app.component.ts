import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/models/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'Georgi Georgiev Demo';
  public loading$: Observable<any>;
  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.loading$ = this.store.pipe( select(state => state.ui.loading) );
  }
}
