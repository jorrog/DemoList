import 'rxjs/add/operator/take';
import {select, Store} from '@ngrx/store';
import {appStateUser, UserState} from '../../users/store/user.state';
import {appStateUi, UiState} from './ui.state';
import {appStateSearch, SearchState} from '../../search/store/search.state';

export interface AppState {
  ui: UiState;
  user: UserState;
  search: SearchState;
}

export const appState: AppState = {
  ...appStateUi,
  ...appStateUser,
  ...appStateSearch
};

/**
 * getting synchronously state
 * by passing store as argument
 * @param store this.store (Store<AppState>)
 */
export const getState = (store: Store<AppState>): AppState => {
    let _state: AppState;
    store.pipe(select((state: AppState) => state)).take(1).subscribe(o => _state = o);
    return _state;
  };

