import { Pie } from '@ant-design/plots';
import { Col, Row, Divider } from 'antd';

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
  width: 150,
  height: 150,
  style: {
    fill: (data: DataType) => {
      return data.color;
    },
  },
};

const createChart = () => (
  <Row style={{ minWidth: '400px' }} gutter={24}>
    {data.map((chart) => (
      <Col span={3} key={chart.key}>
        <Pie
          {...config}
          colors={[chart.color, '#C8CCCD']}
          data={[
            chart,
            {
              category: 'Others',
              tCO2Eq: 100 - chart.tCO2Eq,
              color: '#C8CCCD',
            },
          ]}
        />
      </Col>
    ))}
  </Row>
);

const createNewAnalysisChart = () => (
  <Row style={{ minWidth: '400px' }} gutter={24}>
    {data.map((chart) => (
      <Col span={3} key={chart.key}>
        <Pie
          {...config}
          colors={[chart.color, '#C8CCCD']}
          data={[
            chart,
            {
              category: 'Others',
              tCO2Eq: 100 - chart.tCO2Eq,
              color: '#C8CCCD',
            },
          ]}
        />
      </Col>
    ))}
  </Row>
);

const createChartHeading = () => (
  <Row style={{ minWidth: '400px' }} gutter={24} justify={'center'}>
    {data.map((chart) => (
      <Col span={3} key={chart.key}>
        <Row justify={'center'}>{chart?.category}</Row>
      </Col>
    ))}
  </Row>
);

const TopEmissionChart = () => {
  return (
    <>
      {createChartHeading()}
      <></>
      {createChart()}
      <Divider>New Analysis</Divider>
      {createNewAnalysisChart()}
    </>
  );
};

export default TopEmissionChart;
