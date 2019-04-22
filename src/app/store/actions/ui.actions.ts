import { Action } from '@ngrx/store';

export enum UIActionTypes {
  LOADING = '[UI] Loading',
}

export class LoadingUI implements Action {
  public readonly type: UIActionTypes.LOADING = UIActionTypes.LOADING;
  constructor(public loading: boolean) { }
}

export type UIAll = LoadingUI;
