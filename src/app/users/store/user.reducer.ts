import {appStateUser, UserState} from './user.state';
import { ActionTypes, All } from './user.actions';

export function userReducer(state: UserState = appStateUser.user, action: All): UserState {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_USER:
      return {
        ...state,
        current: action.user
      };

    case ActionTypes.RESET_CURRENT_USER:
      return {
        ...state,
        current: {
          id: 0,
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          city: '',
          country: ''
        }
      };
    case ActionTypes.UPDATE_USER_LIST:
      return{
        ...state,
        list: [
          ...state.list,
          ...action.users
        ]
      };
    case ActionTypes.RESET_USER_LIST:
      return{
        ...state,
        list: []
      };
    case ActionTypes.POPULATE_SHOW_EDIT:
      return{
        ...state,
        showEdit: action.show
      };
    case ActionTypes.POPULATE_SINGLE_USER:
      const usersList = state.list;
      const userIndex = usersList.findIndex( user => user.id === action.user.id);
      if (userIndex > -1) {
        usersList[userIndex] = action.user;
      }
      return{
        ...state,
        list: [
          ...usersList
        ]
      };
    default: return state;
  }
}
