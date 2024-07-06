import { Form, InputNumber, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const DayForm = ({
  daysData,
  day,
  eventDate,
  eventType,
  setDaysData,
}: {
  formName?: string;
  daysData: any;
  day: number;
  setDaysData: any;
  eventDate: string;
  eventType?: string;
}) => {
  const data = daysData ? daysData[day] : null;
  const [dayData, setDayData] = useState(data || {});

  const updateData = (updatedData: any) => {
    setDayData(updatedData);
    const newDaysData = [...daysData];
    newDaysData[day] = updatedData;
    setDaysData(newDaysData);
  };

  const setStartAndEndTime = (_values: any, formatString: [string, string]) => {
    const newDayData = {
      ...dayData,
      startTime: formatString[0],
      endTime: formatString[1],
    };
    const newDaysData = [...daysData];
    newDaysData[day] = newDayData;
    setDayData(newDayData);
    setDaysData(newDaysData);
  };

  useEffect(() => {
    updateData({
      ...dayData,
      event_date_time: eventDate,
      event_type: eventType,
    });
  }, [eventType]);
  if (!dayData) {
    return <></>;
  }

  return (
    <>
      <Form.Item label="Timing of the Event" rules={[{ required: true }]}>
        <TimePicker.RangePicker
          value={
            dayData.startTime && dayData.endTime
              ? [
                  dayjs(dayData.startTime, 'HH:mm'),
                  dayjs(dayData.endTime, 'HH:mm'),
                ]
              : null
          }
          format="HH:mm"
          style={{ width: '100%' }}
          onChange={setStartAndEndTime}
        />
      </Form.Item>
      <Form.Item label="Person attendees event" rules={[{ required: true }]}>
        <InputNumber
          className="full-width"
          value={dayData.no_of_in_person_attendees}
          onChange={(value) =>
            updateData({ ...dayData, no_of_in_person_attendees: value })
          }
        />
      </Form.Item>
      <Form.Item
        label="Virtual attendees (actual or expected)"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="full-width"
          value={dayData.no_of_virtual_attendees}
          onChange={(value) =>
            updateData({ ...dayData, no_of_virtual_attendees: value })
          }
        />
      </Form.Item>
      <Form.Item
        label="Numbers of organizers attending the event"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="full-width"
          value={dayData.no_of_organizer_attendees}
          onChange={(value) =>
            updateData({ ...dayData, no_of_organizer_attendees: value })
          }
        />
      </Form.Item>
      <Form.Item
        label="Size of the venue/ venues (sqm)"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="full-width"
          value={dayData.venueSize}
          onChange={(value) => updateData({ ...dayData, size_of_venue: value })}
        />
      </Form.Item>
    </>
  );
};

export default DayForm;
