import { Component, OnInit, OnDestroy } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {GetUsers, PopulateShowEdit, ResetCurrentUser, UpdateCurrentUser} from '../store/user.actions';
import {Observable} from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import {UserModel} from '../user.model';
import {LoadingUI} from '../../store/actions/ui.actions';
import {SearchService} from '../../search/search.service';
import * as moment from 'moment';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  users$: Observable<UserModel[]>;
  showEdit$: Observable<boolean>;
  users: UserModel[] = [];
  allUsers: UserModel[] = [];
  searchTerm: string = '';
  showList = true;
  constructor(
    private store: Store<AppState>,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.users$ = this.store.pipe( select(state => state.user.list) );
    this.showEdit$ = this.store.pipe( select(state => state.user.showEdit) );
    this.store.dispatch(new LoadingUI(true));
    this.store.dispatch(new GetUsers());

    this.subscription.add(
      this.users$.subscribe( users => {

        users = users.map(user => {
          return {
            ...user,
            dateOfBirthAsStr: moment(user.dateOfBirth).format('DD/MM/YYYY')
          };
        });

        this.allUsers = users;
        this.users = users;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  realTimeSearch(e) {
    if (e.length === 0) {
      this.users = this.allUsers;
    } else {
      const foundUsers = this.searchService.searchUsers(e, this.allUsers);
      this.users = foundUsers;
    }
  }

  addNewUser() {
    this.store.dispatch(new ResetCurrentUser());
    this.store.dispatch(new PopulateShowEdit(true));
  }

}
