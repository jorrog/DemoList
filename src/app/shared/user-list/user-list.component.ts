import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from '../../users/user.model';
import {PopulateShowEdit, UpdateCurrentUser} from '../../users/store/user.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-use-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() usersList: UserModel[];
  // dataSource = new MatTableDataSource(this.usersList);
  displayedColumns: string[] = ['firstName', 'firstName', 'dateOfBirthAsStr', 'city', 'country', 'actions'];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  onDetailsClick(user) {
    if (user) {
      this.store.dispatch(new UpdateCurrentUser(user));
    } else {
      alert('User not found');
    }
  }

  onEditClick(user) {
    this.store.dispatch(new UpdateCurrentUser(user));
    this.store.dispatch(new PopulateShowEdit(true));
  }

}
