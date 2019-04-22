import {appStateUi, UiState} from '../models/ui.state';
import { UIActionTypes, UIAll } from './../actions/ui.actions';

export function uiReducer(state: UiState = appStateUi.ui, action: UIAll): UiState {
  switch (action.type) {
    case UIActionTypes.LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default: return state;
  }
}
