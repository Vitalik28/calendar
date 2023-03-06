import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import type { Dayjs } from 'dayjs';
import { formatDate } from '../utils/date';
import { useAppSelector } from '../hooks/useAppSelector';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const { user } = useAppSelector((state) => state.auth);
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  });

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label=" Описание события"
        name="description"
        rules={[{ required: true, message: 'Обязательное окно' }]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[{ required: true, message: 'Обязательное окно' }]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[{ required: true, message: 'Обязательное окно' }]}
      >
        <Select
          onChange={(guest) => setEvent({ ...event, guest })}
          style={{ width: 120 }}
          options={guests.map((guest) => ({
            value: guest.username,
            label: guest.username,
          }))}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
