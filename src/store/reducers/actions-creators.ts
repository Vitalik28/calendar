import { AuthActionCreators } from './auth/action-creator';
import { EventActionCreators } from './event/action-creators';

export const AllActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
