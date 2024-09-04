import { Column } from '@ant-design/plots';
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
];

const config = {
  data,
  xField: 'totalPercentage',
  yField: 'tCO2Eq',
  style: {
    fill: ({ totalPercentage }) => {
      if (totalPercentage > 20) {
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
    {data.map((chart) => (
      <Col span={3} key={chart.key}>
        <Column
          {...config}
          colors={[chart.color, '#9FC5E9']}
          //   data={[
          //     chart,
          //     {
          //       category: 'Others',
          //       tCO2Eq: 100 - chart.tCO2Eq,
          //       color: '#C8CCCD',
          //     },
          //   ]}
        />
      </Col>
    ))}
  </Row>
);

const Travel = () => {
  return <>{createChart()}</>;
};

export default Travel;
