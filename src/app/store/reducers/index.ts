import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models/app.state';
import {userReducer} from '../../users/store/user.reducer';
import {uiReducer} from './ui.reducer';
import {searchReducer} from '../../search/store/search.reducer';


/**
 * all reducers
 * type ActionReducerMap<AppStateModel>
 */
export const reducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  user: userReducer,
  search: searchReducer
};
