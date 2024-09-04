import { Column } from '@ant-design/plots';
import { Col, Row } from 'antd';

const data: any[] = [
  {
    key: '2',
    category: 'Event',
    tCO2Eq: 90,
    type: 'No of nights per person',
    color: '#15498E',
  },
  {
    key: '3',
    category: 'Materials',
    tCO2Eq: 44,
    type: 'No of person who need accommodation',
    color: '#7E56ED',
  },
  {
    key: '4',
    category: 'Venue',
    tCO2Eq: 64,
    type: 'Type of accommodation',
    color: '#EF912E',
  },
];

const config = {
  data,
  xField: 'type',
  yField: 'tCO2Eq',
  style: {
    fill: ({ type }) => {
      if (type > 20) {
        return '#9FC5E9';
      }
      return '#9FC5E9';
    },
  },
  label: {
    text: (originData) => {
      const val = parseFloat(originData.value);
      if (val < 0.05) {
        return (val * 100).toFixed(1) + '%';
      }
      return '';
    },
    offset: 10,
  },
  legend: false,
};

const createChart = () => (
  <Row style={{ minWidth: '400px' }} gutter={24}>
    <Column {...config} />
  </Row>
);

const Travel = () => {
  return <>{createChart()}</>;
};

export default Travel;
