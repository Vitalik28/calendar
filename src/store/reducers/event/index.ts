import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import { EventActions, EventActionsEnum, EventState } from './types';

const initialState: EventState = {
  guests: [] as IUser[],
  events: [] as IEvent[],
};

export default function eventReducer(
  state = initialState,
  action: EventActions
): EventState {
  switch (action.type) {
    case EventActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}
