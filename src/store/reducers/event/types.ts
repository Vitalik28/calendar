import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestAction {
  type: EventActionsEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionsEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventActions = SetEventsAction | SetGuestAction;
