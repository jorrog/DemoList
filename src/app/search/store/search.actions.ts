import { Action } from '@ngrx/store';
import { UserModel } from '../../users/user.model';

export enum ActionTypes {
  UPDATE_SEARCH_LIST = '[Search] Update Search list',
  RESET_SEARCH_LIST = '[Search] Reset Search list',
  UPDATE_SEARCH_TERM = '[Search] Update Search term',
}

export class UpdateSearchList implements Action {
  public readonly type: ActionTypes.UPDATE_SEARCH_LIST = ActionTypes.UPDATE_SEARCH_LIST;
  constructor( public list: UserModel[]) {}
}

export class ResetSearchList implements Action {
  public readonly type: ActionTypes.RESET_SEARCH_LIST = ActionTypes.RESET_SEARCH_LIST;
}

export class UpdateSearchTerm implements Action {
  public readonly type: ActionTypes.UPDATE_SEARCH_TERM = ActionTypes.UPDATE_SEARCH_TERM;
  constructor( public term: string) {}
}


export type All = UpdateSearchList
  | ResetSearchList
  | UpdateSearchTerm;
