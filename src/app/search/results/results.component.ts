import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, getState} from '../../store/models/app.state';
import {Observable, Subscription} from 'rxjs';
import {UserModel} from '../../users/user.model';
import {LoadingUI} from '../../store/actions/ui.actions';
import {GetUsers} from '../../users/store/user.actions';
import {UpdateSearchList} from '../store/search.actions';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  users$: Observable<UserModel[]>;
  searchTerm$: Observable<string>;
  users: UserModel[] = [];
  allUsers: UserModel[] = [];
  constructor(
    private store: Store<AppState>,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.allUsers = getState(this.store).user.list;
    this.users$ = this.store.pipe( select(state => state.search.list) );
    this.searchTerm$ = this.store.pipe( select(state => state.search.searchTerm) );

    this.subscription.add(
      this.users$.subscribe( users => {
        this.users = users;
      })
    );

    this.subscription.add(
      this.searchTerm$.subscribe( term => {
        if (term.length > 0) {
            this.searchUsers(term);
        } else {
          this.users = this.allUsers;
        }
      })
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchUsers(term) {
    const foundUsers = this.searchService.searchUsers(term, this.allUsers);
    this.store.dispatch(new UpdateSearchList(foundUsers));
  }

}
