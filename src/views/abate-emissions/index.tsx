import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutPage from '../layout/Layout';
import { Card, Col, Row } from 'antd';
import '../data-collection/form/venue/tabs.scss';
import Statistics from './Statistics';
import Analysis from './analysis';
import TopEmissionChart from './TopEmissionChart';
import EventEmission from './EventEmission';
import './abateEmission.scss';

const AbateEmissions: React.FC = () => {
  const checkLastPath = () => {
    const location = useLocation();
    const previousPathRef = useRef(location.pathname);
  }
  return (
    <LayoutPage>
      {
        checkLastPath() ?
          <EventEmission />
          :
          <>
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
          </>
      }
    </LayoutPage>
  );
};

export default AbateEmissions;
