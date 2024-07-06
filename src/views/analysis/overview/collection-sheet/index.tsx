import Progress from '../../../utlils/progress';
import { Col, Row } from 'antd';
import {
  AccomodationSvg,
  EventSvg,
  FoodSvg,
  MarketingSvg,
  MaterialSvg,
  PreparationSvg,
  StreamingSvg,
  TransportSvg,
  TravelSvg,
  VenueSvg,
  WasteSvg,
  WaterSvg,
} from '../../../layout/sidebar/icons';

const CollectionSheet = () => {
  return (
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <Progress
          text={
            <div>
              <EventSvg className="side-nav-icon" /> Events
            </div>
          }
          value={10}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <MaterialSvg className="side-nav-icon" /> Materials
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <VenueSvg className="side-nav-icon" /> Venue
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <WasteSvg className="side-nav-icon" /> Waste
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <FoodSvg className="side-nav-icon" /> Food
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <MarketingSvg className="side-nav-icon" /> Marketing
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <AccomodationSvg className="side-nav-icon" /> Accomodation
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <PreparationSvg className="side-nav-icon" /> Preparation
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <TravelSvg className="side-nav-icon" /> Travel
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <WaterSvg className="side-nav-icon" /> Water
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <TransportSvg className="side-nav-icon" /> Transport
            </div>
          }
          value={50}
        />
      </Col>
      <Col span={12}>
        <Progress
          text={
            <div>
              <StreamingSvg className="side-nav-icon" /> Streaming
            </div>
          }
          value={50}
        />
      </Col>
    </Row>
  );
};

export default CollectionSheet;
