import { Pie } from '@ant-design/plots';
import { Col, Row } from 'antd';

const data: DataType[] = [
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
    tCO2Eq: 23,
    totalPercentage: 23,
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
    tCO2Eq: 56,
    totalPercentage: 56,
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

const config = {
  angleField: 'tCO2Eq',
  colorField: 'category',
  legend: false,
  label: false,
  tooltip: {
    shared: false,
    title: 'category',
    color: 'color',
  },
  width: 200,
  height: 200,
  style: {
    fill: (data: DataType) => {
      return data.color;
    },
  },
};

const createChart = () => {
  const chats = [];
  let i = 0;
  while (i < data.length) {
    chats.push(
      <Row style={{ minWidth: '400px' }}>
        <Col span={12}>
          <Pie
            {...config}
            colors={[data[i].color, '#C8CCCD']}
            data={[
              data[i],
              {
                category: 'Others',
                tCO2Eq: 100 - data[i++].tCO2Eq,
                color: '#C8CCCD',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <Pie
            {...config}
            colors={[data[i].color, '#C8CCCD']}
            data={[
              data[i],
              {
                category: 'Others',
                tCO2Eq: 100 - data[i++].tCO2Eq,
                color: '#C8CCCD',
              },
            ]}
          />
        </Col>
      </Row>
    );
  }
  return chats;
};

const TopEmissionChart = () => {
  return <>{createChart()}</>;
};

export default TopEmissionChart;
