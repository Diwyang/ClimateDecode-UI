import React from 'react';
import { Card, Avatar } from 'antd';

const Impact: React.FC = () => (
  <Card
    title="World Impact of your Event Transmissions"
    bordered={false}
    className="upcoming-events-card"
    style={{ height: 400 }}
  >
    <div className="impact">
      <div className="row">
        <Avatar shape="square" size={64} />
        <div className="text">Flights around the circumference of the world, or</div>
      </div>
      <div className="row">
        <Avatar shape="square" size={64} />
        <div className="text">m2 Arctic sea-ice lost</div>
      </div>
      <div className="row">
        <Avatar shape="square" size={64} />
        <div className="text">Pine trees needed to capture emissions for a whole year</div>
      </div>
    </div>
  </Card>
);

export default Impact;
