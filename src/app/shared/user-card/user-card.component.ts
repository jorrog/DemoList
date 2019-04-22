import {Component, Input, OnInit} from '@angular/core';
import {PopulateShowEdit, UpdateCurrentUser} from '../../users/store/user.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {UserModel} from '../../users/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onDetailsClick() {
    if (this.user) {
      this.store.dispatch(new UpdateCurrentUser(this.user));
    } else {
      alert('User not found');
    }
  }

  onEditClick() {
    this.store.dispatch(new UpdateCurrentUser(this.user));
    this.store.dispatch(new PopulateShowEdit(true));
  }
}
