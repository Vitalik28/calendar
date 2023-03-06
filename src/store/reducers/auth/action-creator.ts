import axios, { AxiosResponse } from 'axios';
import { AppDispatch } from '../..';
import { UserService } from '../../../api/userSevice';
import { IUser } from '../../../models/IUser';
import {
  AuthActions,
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUHT,
    payload: auth,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        const response = await UserService.getUsers();
        const mockUser = response.data.find(
          (user) => user.username === username && user.password === password
        );

        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setAuth(true));
        } else {
          dispatch(AuthActionCreators.setError('Некоректный логин или пароль'));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      } catch (e) {
        dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
      }
    },
  logout:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
      } catch (e) {}
    },
};
