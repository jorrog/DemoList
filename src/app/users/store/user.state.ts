import {UserModel} from '../user.model';

export interface UserState {
  list: UserModel[];
  current: UserModel;
  showEdit: boolean;
}

export interface AppUserState {
  user: UserState;
}

export const appStateUser: AppUserState = {
  user: {
    list: [],
    current: {
      id: 0,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      city: '',
      country: ''
    },
    showEdit: false
  }
};
