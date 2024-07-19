import React from 'react';
import { Col, Row } from 'antd';
import Analysis from './analysis';
import CollectionSheet from './collection';
import UpcomingEvent from './upcomingEvents';
import Impact from './impact';
const OverviewForm: React.FC = () => {
  return (
    <Row gutter={48}>
      <Col span={24}>
        <Row gutter={24}>
          <Col span={12}>
            <UpcomingEvent></UpcomingEvent>
          </Col>
          <Col span={12}>
            <Analysis></Analysis>
          </Col>
        </Row>
        <div style={{ marginTop: '20px' }}>
          <Row gutter={24}>
            <Col span={12}>
              <Impact></Impact>
            </Col>
            <Col span={12}>
              <CollectionSheet></CollectionSheet>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default OverviewForm;
