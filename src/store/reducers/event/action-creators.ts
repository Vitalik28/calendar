import { AppDispatch } from '../..';
import { UserService } from '../../../api/userSevice';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import { EventActionsEnum, SetEventsAction, SetGuestAction } from './types';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload,
  }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    const responce = await UserService.getUsers();
    dispatch(EventActionCreators.setGuests(responce.data));
  },

  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {}
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (event) => event.author === username || event.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {}
  },
};
