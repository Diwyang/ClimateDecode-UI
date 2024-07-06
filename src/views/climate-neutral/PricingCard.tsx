import { Card, Col, Row } from 'antd';
import Icon from '@ant-design/icons';
import Tick from './icons/Tick.svg?react';
import { uniqueId } from 'lodash';

const PricingCard = ({
  title,
  subTitle,
  currency,
  price,
  occurance,
  benefits = [],
}: Pricing) => {
  return (
    <Card
      style={{
        width: 250,
        height: 250,
        backgroundColor: '#4e888f',
        color: '#fff',
      }}
    >
      <div style={{ fontSize: '16px', textAlign: 'center' }}>{title}</div>
      <div style={{ fontSize: '10px', textAlign: 'center' }}>{subTitle}</div>
      <div
        style={{
          fontSize: '16px',
          textAlign: 'center',
          marginTop: '25px',
          marginBottom: '25px',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '21px',
            opacity: 0.75,
          }}
        >
          {currency}
        </span>
        <span style={{ fontSize: '32px', fontWeight: 700 }}>{price}</span>
        <span style={{ fontSize: '10px' }}>{occurance}</span>
      </div>
      <div style={{ paddingLeft: '25%' }}>
        <div style={{ fontSize: '10px' }}>
          {benefits.map((benefit) => (
            <Row gutter={8} key={uniqueId()}>
              <Col>
                <Icon component={Tick} />
              </Col>
              <Col>{benefit}</Col>
            </Row>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PricingCard;
