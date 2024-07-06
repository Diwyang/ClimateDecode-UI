import { useEffect, useState } from 'react';
import {
  Form,
  Flex,
  Input,
  Select,
  InputNumber,
  Space,
  Button,
  Collapse,
  DatePicker,
  App,
  Spin,
} from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
  dataLoading,
  eventReceived,
  eventSaved,
} from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';
import dayjs, { Dayjs } from 'dayjs';
import { EditOutlined } from '@ant-design/icons';
import DayForm from './DayForm';
import { isUndefined } from 'lodash';
import {
  useGetEventsQuery,
  useSaveEventMutation,
} from '../../../../containers/data-collection/api';
import { JSX } from 'react/jsx-runtime';

const formName = 'event';
const dateFormat = 'YYYY-MM-DDTHH:mm:ssZ';

const daysFormItems = (
  daysCount: number,
  daysData: any,
  setDaysData: any,
  startDate: Dayjs | null,
  form: any
) => {
  const daysArr: { key: string; label: JSX.Element; children: JSX.Element }[] =
    [];
  if (!startDate) {
    return daysArr;
  }
  const { event: eventData }: { event: EventData } = form.getFieldsValue();
  for (let i = 0; i < daysCount; i++) {
    daysArr.push({
      key: `${i}`,
      label: (
        <b>
          {`Day ${i + 1}`} <EditOutlined />
        </b>
      ),
      children: (
        <DayForm
          formName={formName}
          daysData={daysData}
          day={i}
          eventType={eventData.event_type}
          eventDate={startDate.format(dateFormat)}
          setDaysData={setDaysData}
        />
      ),
    });
    startDate = startDate.add(1, 'day');
  }
  return daysArr;
};

function EventForm({ next }: { next: () => void }) {
  const { message } = App.useApp();

  const event = useAppSelector((state) => state.dataCollection.data.event.data);
  const days =
    useAppSelector(
      (state) => state.dataCollection.data.event.data.venue_detail_list
    ) || [];
  const isDataLoading = useAppSelector((state) => state.dataCollection.loading);

  const [dayCount, setDayCount] = useState<number>(
    event && !isUndefined(event.total_no_of_days) ? event.total_no_of_days : 0
  );
  const [startDate, setStartDate] = useState<Dayjs | null>(
    event && event.event_start_date ? dayjs(event.event_start_date) : null
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    event && event.event_end_date ? dayjs(event.event_end_date) : null
  );
  const [daysData, setDaysData] = useState<any[]>(days);

  const [saveEvent] = useSaveEventMutation({
    fixedCacheKey: 'shared-update-post',
  });

  const { data: fetchedEvents, isLoading } = useGetEventsQuery({
    fixedCacheKey: 'shared-update-post',
  });

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const saveEventData = async (eventData: EventData) => {
    dispatch(dataLoading());
    try {
      const response = (await saveEvent(eventData)) as {
        data: EventData;
        error: any;
      };
      const event: EventInfo = {
        data: response.data,
      };
      console.log(response);
      message.success('Event Saved Successfully!');
      dispatch(eventSaved({ event }));
    } catch (ex) {
      console.log(ex);
      message.error('Event Save Failed!: ' + ex);
    }
  };

  const onFinish = async (values: any) => {
    const { event: eventData }: { event: EventData } = values;
    eventData.event_start_date = startDate?.format(dateFormat);
    eventData.event_end_date = endDate?.format(dateFormat);
    const daysCount =
      startDate && endDate
        ? endDate.diff(startDate) / (1000 * 60 * 60 * 24)
        : 0;
    eventData.total_no_of_days = daysCount;
    eventData.venue_detail_list = daysData;
    await saveEventData(eventData);
  };

  const onNext = async () => {
    const { event: eventData }: { event: EventData } = form.getFieldsValue();
    eventData.event_start_date = startDate?.format(dateFormat);
    eventData.event_end_date = endDate?.format(dateFormat);
    const daysCount =
      startDate && endDate
        ? endDate.diff(startDate) / (1000 * 60 * 60 * 24)
        : 0;
    eventData.total_no_of_days = daysCount;
    eventData.venue_detail_list = daysData;
    await saveEventData(eventData);
    next();
  };

  const setStartAndEndDate = (values: any) => {
    const totalDays = values[1].diff(values[0]) / (1000 * 60 * 60 * 24);
    setDayCount(totalDays);
    setStartDate(values[0]);
    setEndDate(values[1]);
    setDaysData(Array(totalDays).fill({}));
  };

  useEffect(() => {}, [dayCount, daysData]);
  useEffect(() => {
    dispatch(dataLoading());
    if (!isLoading && fetchedEvents) {
      dispatch(eventReceived(fetchedEvents.data));
    }
  }, [dispatch, fetchedEvents, isLoading]);

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
      form={form}
      initialValues={{ event }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Spin spinning={isDataLoading || isLoading} fullscreen />
      <div className="form-fields-container">
        <Flex gap="40px">
          <div className="full-width">
            <Form.Item
              name={[formName, 'event_type']}
              label="Type of Event"
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { value: 'AFTERNOONEVENT', label: 'Afternoon Event' },
                  { value: 'MORNINGEVENT', label: 'Morning Event' },
                  { value: 'EVENINGEVENT', label: 'Evening Event' },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={[formName, 'event_name']}
              label="Event Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={[formName, 'event_organiser']}
              label="Event Organizer Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={[formName, 'contact_person_name']}
              label="Contact Person Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={[formName, 'contact_person_email']}
              label="Contact Person Email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={[formName, 'event_hosted_country']}
              label="Country/State Where Event is Hosted"
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { value: 'india', label: 'India' },
                  { value: 'cananda', label: 'Canada' },
                  { value: 'usa', label: 'USA' },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Start and End Date of the Event"
              rules={[{ required: true }]}
            >
              <DatePicker.RangePicker
                picker="date"
                value={[startDate, endDate]}
                style={{ width: '100%' }}
                onChange={setStartAndEndDate}
              />
            </Form.Item>
            <Form.Item
              label="Number Of Days"
              rules={[{ required: true, type: 'number', min: 1 }]}
            >
              <InputNumber
                className="full-width"
                defaultValue={dayCount}
                value={dayCount}
                disabled
              />
            </Form.Item>
          </div>
          <div className="full-width">
            <Space direction="vertical" className="full-width">
              <Collapse
                expandIconPosition="end"
                accordion
                expandIcon={({ isActive }) => (
                  <CaretDownOutlined rotate={isActive ? 180 : 0} />
                )}
                items={daysFormItems(
                  dayCount,
                  daysData,
                  setDaysData,
                  startDate,
                  form
                )}
              />
            </Space>
          </div>
        </Flex>
      </div>
      <Flex gap="large" className="form-actions-container">
        <Button type="default" htmlType="submit" shape="round">
          Save
        </Button>
        <Button type="primary" htmlType="button" shape="round" onClick={onNext}>
          Next
        </Button>
      </Flex>
    </Form>
  );
}

export default EventForm;
