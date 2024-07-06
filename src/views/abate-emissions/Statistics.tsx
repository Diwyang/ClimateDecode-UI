import { Progress, Table, TableProps } from 'antd';
import React from 'react';

const data: DataType[] = [
  {
    key: '1',
    category: 'Total Emissions',
    tCO2Eq: 1000,
    totalPercentage: 1000,
    color: '#C8CCCD',
  },
  {
    key: '2',
    category: 'Event',
    tCO2Eq: 25,
    totalPercentage: 25,
    color: '#15498E',
  },
  {
    key: '3',
    category: 'Materials',
    tCO2Eq: 24,
    totalPercentage: 24,
    color: '#7E56ED',
  },
  {
    key: '4',
    category: 'Venue',
    tCO2Eq: 24,
    totalPercentage: 24,
    color: '#EF912E',
  },
  {
    key: '5',
    category: 'Waste',
    tCO2Eq: 24,
    totalPercentage: 24,
    color: '#53A150',
  },
  {
    key: '6',
    category: 'Food',
    tCO2Eq: 2,
    totalPercentage: 2,
    color: '#F1D06E',
  },
  {
    key: '7',
    category: 'Marketing',
    tCO2Eq: 12,
    totalPercentage: 12,
    color: '#7ABFB5',
  },
  {
    key: '8',
    category: 'Accommodation',
    tCO2Eq: 3,
    totalPercentage: 3,
    color: '#427194',
  },
  {
    key: '9',
    category: 'Preparation',
    tCO2Eq: 12,
    totalPercentage: 12,
    color: '#1C8DC4',
  },
  {
    key: '10',
    category: 'Travel',
    tCO2Eq: 123,
    totalPercentage: 123,
    color: '#E05E5E',
  },
  {
    key: '11',
    category: 'Water',
    tCO2Eq: 23,
    totalPercentage: 23,
    color: '#030606',
  },
  {
    key: '12',
    category: 'Transport',
    tCO2Eq: 156,
    totalPercentage: 156,
    color: '#F8C489',
  },
  {
    key: '13',
    category: 'Streaming',
    tCO2Eq: 23,
    totalPercentage: 23,
    color: '#ED9611',
  },
];

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'tCO2-eq',
    dataIndex: 'tCO2Eq',
    key: 'tCO2Eq',
  },
  {
    title: '% of total',
    dataIndex: 'totalPercentage',
    key: 'totalPercentage',
    render: (value, record) => (
      <Progress percent={value} strokeColor={record.color} showInfo={false} />
    ),
  },
];

const Statistics: React.FC = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Statistics;
