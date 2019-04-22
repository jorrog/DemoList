import {UserModel} from '../../users/user.model';


export interface SearchState {
  list: UserModel[];
  searchTerm: string;
}

export interface AppSearchState {
  search: SearchState;
}

export const appStateSearch: AppSearchState = {
  search: {
    list: [],
    searchTerm: ''
  }
};
