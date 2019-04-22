import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  user$: Observable<UserModel>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.pipe( select(state => state.user.current) );
  }

  ngOnDestroy() {
  }

}
