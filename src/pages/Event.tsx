import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const [visible, setVisible] = useState(false);
  const { guests, events } = useAppSelector((state) => state.event);
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
     
      <EventCalendar events={events} />;
      <Row justify="center">
        <Button onClick={() => setVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
