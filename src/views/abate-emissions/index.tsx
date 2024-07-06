import React from 'react';
import LayoutPage from '../layout/Layout';
import { Card, Col, Row } from 'antd';
import '../data-collection/form/venue/tabs.scss';
import Statistics from './Statistics';
import Analysis from './analysis';
import TopEmissionChart from './TopEmissionChart';

const AbateEmissions: React.FC = () => {
  return (
    <LayoutPage>
      <h1>ABATE YOUR EVENT EMISSIONS</h1>
      <Row gutter={24}>
        <Col span={8}>
          <Card title={<h3>Statistics</h3>}>
            <Statistics />
          </Card>
        </Col>
        <Col span={15}>
          <Card title={<h3>Statistics</h3>}>
            <Analysis />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title={<h3>Top Emission Chart</h3>}>
            <TopEmissionChart />
          </Card>
        </Col>
      </Row>
    </LayoutPage>
  );
};

export default AbateEmissions;
