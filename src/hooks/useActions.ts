import { bindActionCreators } from 'redux';
import { AllActionCreators } from '../store/reducers/actions-creators';
import { useAppDispatch } from './useAppDispatch';
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};
