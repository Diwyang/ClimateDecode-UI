import { Column } from '@ant-design/plots';
import { Col, Row, Typography, Card } from 'antd';

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
const Analysis = () => {
  const config = {
    data,
    yField: 'tCO2Eq',
    colorField: 'category',
    percent: false,
    stack: true,
    legend: false,
    width: 200,
    height: 340,
    interaction: {
      tooltip: {
        shared: false,
        title: 'category',
      },
    },
    tooltip: { channel: 'y0', valueFormatter: '' },
  };
  return (
    <Card
      style={{ height: 400 }}
      title="Analysis"
      bordered={false}
      className="upcoming-events-card"
    >
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <div style={{ paddingTop: '50px' }}>
                <Typography.Title level={4}>Total Emissions</Typography.Title>
                <Typography.Text
                  style={{
                    color: '#FD3F03',
                    fontWeight: 'bold',
                    float: 'left',
                  }}
                >
                  4920
                </Typography.Text>
                <Typography.Text
                  style={{ fontSize: '12px', marginLeft: '30%' }}
                >
                  tCO2-eq
                </Typography.Text>
              </div>
            </Col>
            <Col span={4}>
              <Column {...config} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
export default Analysis;
