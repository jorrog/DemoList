import { appStateSearch, SearchState} from './search.state';
import { ActionTypes, All } from './search.actions';

export function searchReducer(state: SearchState = appStateSearch.search, action: All): SearchState {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_LIST:
      return{ ...state, list: [ ...action.list ] };
    case ActionTypes.RESET_SEARCH_LIST:
      return{ ...state, list: [] };
    case ActionTypes.UPDATE_SEARCH_TERM:
      return{ ...state, searchTerm: action.term };
    default: return state;
  }
}
