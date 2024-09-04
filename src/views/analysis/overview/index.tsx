import { Card, Col, Row, Button } from 'antd';
import React from 'react';
import Statistics from './Statistics';
import TopEmissionChart from './TopEmissionChart';
import DemoColumn from './total-emission';
import CollectionSheet from './collection-sheet';

const Overview: React.FC = () => {
  return (
    <Row gutter={[16, 24]}>
      <Col span={8} style={{ minWidth: '400px' }}>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Card title={<h3>Statistics</h3>}>
              <Statistics />
            </Card>
          </Col>
          <Col span={24}>
            <Card title={<h3>Equivalent to</h3>}>
              <div className="eqvelent">
                <div className="eqvelent-card">
                  <div className="card"></div>
                  <div className="text">Miles Driven</div>
                </div>
                <div className="eqvelent-card">
                  <div className="card"></div>
                  <div className="text">Miles Driven</div>
                </div>
                <div className="eqvelent-card">
                  <div className="card"></div>
                  <div className="text">Miles Driven</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={8} style={{ minWidth: '400px' }}>
        <Card title="Top Emission Chart">
          <TopEmissionChart />
        </Card>
      </Col>
      <Col span={8} style={{ minWidth: '400px' }}>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Card title={<h3>Analysis</h3>}>
              <DemoColumn />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Collection Sheet">
              <CollectionSheet />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ minWidth: '400px' }}>
        <Button
          type="primary"
          htmlType="button"
          shape="round"
          className="new-event-button"
        >
          Abate Your Event Emissions
        </Button>
      </Col>
    </Row>
  );
};

export default Overview;
