import React from 'react';
import { Card, Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  event_id: string;
  event_type: string;
  event_organiser: string;
  contact_person_name: string;
  contact_person_email: string;
  event_name: string;
  event_hosted_country: string;
  event_start_date: string;
  event_end_date: string;
  status: string;
  total_no_of_days: number;
  updated_date_time: string;
  venue_detail_list: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Event Name',
    dataIndex: 'event_name',
    key: 'event_name',
  },
  {
    title: 'Location',
    dataIndex: 'event_hosted_country',
    key: 'event_hosted_country',
  },
  {
    title: 'Start Date',
    dataIndex: 'event_start_date',
    key: 'event_start_date',
    render: (text) => getFormatedDate(text),
  },
  {
    title: 'End Date',
    key: 'event_end_date',
    dataIndex: 'event_end_date',
    render: (text) => getFormatedDate(text),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [
  {
    event_id: '1',
    event_type: 'Private Event',
    event_name: 'Inauguration Event Store',
    event_organiser: 'Event LLV',
    contact_person_name: 'Diwyang Jain',
    contact_person_email: 'jain.diwyang@gmail.com',
    event_hosted_country: 'India',
    event_start_date: '2023-05-01T06:00:00+05:30',
    event_end_date: '2023-05-02T23:59:59+05:30',
    total_no_of_days: 2,
    updated_date_time: '2024-02-17T23:02:54+05:30',
    venue_detail_list: [],
    status: 'Upcoming',
  },
  {
    event_id: '2',
    event_type: 'MORNINGEVENT',
    event_name: 'Party',
    event_organiser: 'Hrishabh Kumar',
    contact_person_name: 'Hrishabh Kumar',
    contact_person_email: 'hrishabhkumar@gmail.com',
    event_hosted_country: 'india',
    event_start_date: '2024-04-16T00:00:00+05:30',
    event_end_date: '2024-04-17T00:00:00+05:30',
    total_no_of_days: 1,
    updated_date_time: '2024-04-16T13:22:30+05:30',
    venue_detail_list: [],
    status: 'Upcoming',
  },
  {
    event_id: '3',
    event_type: 'MORNINGEVENT',
    event_name: 'Party',
    event_organiser: 'Hrishabh Kumar',
    contact_person_name: 'Hrishabh Kumar',
    contact_person_email: 'hrishabhkumar@gmail.com',
    event_hosted_country: 'india',
    event_start_date: '2024-04-16T00:00:00+05:30',
    event_end_date: '2024-04-17T00:00:00+05:30',
    total_no_of_days: 1,
    updated_date_time: '2024-04-16T13:29:04+05:30',
    venue_detail_list: [],
    status: 'Upcoming',
  },
  {
    event_id: '4',
    event_type: 'MORNINGEVENT',
    event_name: 'Party',
    event_organiser: 'Hrishabh Kumar',
    contact_person_name: 'Hrishabh Kumar',
    contact_person_email: 'hrishabhkumar@gmail.com',
    event_hosted_country: 'india',
    event_start_date: '2024-04-16T00:00:00+05:30',
    event_end_date: '2024-04-17T00:00:00+05:30',
    total_no_of_days: 1,
    updated_date_time: '2024-04-16T13:31:59+05:30',
    venue_detail_list: [],
    status: 'Upcoming',
  },
];

const getFormatedDate = (date: string) => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  let mm: any = '';
  let dd: any = '';
  mm = newDate.getMonth() + 1; // Months start at 0!
  dd = newDate.getDate();

  if (dd < 10) dd = ('0' + dd) as string;
  if (mm < 10) mm = '0' + mm;

  const formatteddate = dd + '.' + mm + '.' + yyyy;
  return formatteddate;
};

const UpcomingEvent: React.FC = () => (
  <Card
    title="Upcoming Events"
    bordered={false}
    className="upcoming-events-card"
    style={{ height: 400 }}
  >
    <Table columns={columns} dataSource={data} style={{ width: '100%' }} />
  </Card>
);

export default UpcomingEvent;
