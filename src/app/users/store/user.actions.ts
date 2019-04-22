import { Action } from '@ngrx/store';
import { UserModel } from '../user.model';

export enum ActionTypes {
  UPDATE_CURRENT_USER = '[USERS] UPDATE CURRENT USER',
  RESET_CURRENT_USER = '[USERS] RESET CURRENT USER',
  GET_USERS = '[USERS] GET USERS',
  UPDATE_USER_LIST = '[USERS] UPDATE USER LIST',
  RESET_USER_LIST = '[USERS] RESET USER LIST',
  POPULATE_SHOW_EDIT = '[USERS] POPULATE SHOW EDIT',
  ADD_NEW_USER = '[USERS] ADD NEW USER',
  UPDATE_SINGLE_USER = '[USERS] UPDATE SINGLE USER',
  POPULATE_SINGLE_USER = '[USERS] POPULATE SINGLE USER',
}


export class GetUsers implements Action {
  public readonly type: ActionTypes.GET_USERS = ActionTypes.GET_USERS;
}


export class UpdateUserList implements Action {
  public readonly type: ActionTypes.UPDATE_USER_LIST = ActionTypes.UPDATE_USER_LIST;
  constructor( public users: UserModel[]) {}
}

export class ResetUserList implements Action {
  public readonly type: ActionTypes.RESET_USER_LIST = ActionTypes.RESET_USER_LIST;
}


export class ResetCurrentUser implements Action {
  public readonly type: ActionTypes.RESET_CURRENT_USER = ActionTypes.RESET_CURRENT_USER;
}

export class UpdateCurrentUser implements Action {
  public readonly type: ActionTypes.UPDATE_CURRENT_USER = ActionTypes.UPDATE_CURRENT_USER;
  constructor( public user: UserModel) {}
}

export class PopulateShowEdit implements Action {
  public readonly type: ActionTypes.POPULATE_SHOW_EDIT = ActionTypes.POPULATE_SHOW_EDIT;
  constructor( public show: boolean) {}
}

export class AddNewUser implements Action {
  public readonly type: ActionTypes.ADD_NEW_USER = ActionTypes.ADD_NEW_USER;
  constructor( public user: UserModel) {}
}

export class UpdateSingleUser implements Action {
  public readonly type: ActionTypes.UPDATE_SINGLE_USER = ActionTypes.UPDATE_SINGLE_USER;
  constructor( public user: UserModel) {}
}

export class PopulateSingleUser implements Action {
  public readonly type: ActionTypes.POPULATE_SINGLE_USER = ActionTypes.POPULATE_SINGLE_USER;
  constructor( public user: UserModel) {}
}

export type All = UpdateUserList
  | ResetUserList
  | UpdateCurrentUser
  | ResetCurrentUser
  | GetUsers
  | PopulateShowEdit
  | AddNewUser
  | UpdateSingleUser
  | PopulateSingleUser;
