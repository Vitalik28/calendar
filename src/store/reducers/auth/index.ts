import { IUser } from '../../../models/IUser';
import { AuthActions, AuthActionsEnum, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUHT:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
