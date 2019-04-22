import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {
  ActionTypes,
  UpdateCurrentUser,
  UpdateUserList, GetUsers, ResetCurrentUser, AddNewUser, UpdateSingleUser, PopulateSingleUser
} from './user.actions';
import { UsersService } from '../users.service';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {Action, Store} from '@ngrx/store';
import {from, of} from 'rxjs';
import {Router} from '@angular/router';
import {AppState} from '../../store/models/app.state';
import {LoadingUI} from '../../store/actions/ui.actions';


@Injectable()
export class UserEffects {

  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private usersService: UsersService,
    private router: Router
  ) {}

  @Effect()
  getUsers: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.GET_USERS),
    mergeMap((action: GetUsers) =>
      this.usersService.getAllUsers().pipe(
        mergeMap((res) => {
          return [
            (new UpdateUserList(res)),
            (new LoadingUI(false))
          ];
        }),
        catchError(err => {
          return [];
        })
      )));

  @Effect()
  addUser: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.ADD_NEW_USER),
    mergeMap((action: AddNewUser) =>
      this.usersService.addUser(action.user).pipe(
        mergeMap((res) => {
          return [
            (new UpdateUserList([action.user])),
            (new LoadingUI(false))
          ];
        }),
        catchError(err => {
          return [];
        })
      )));

  @Effect()
 updateUser: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.UPDATE_SINGLE_USER),
    mergeMap((action: UpdateSingleUser) =>
      this.usersService.updateUser(action.user).pipe(
        mergeMap((res) => {
          return [
            (new PopulateSingleUser(action.user)),
            (new LoadingUI(false))
          ];
        }),
        catchError(err => {
          return [];
        })
      )));

}
