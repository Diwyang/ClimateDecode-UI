import { uniqueId } from 'lodash';
import PricingCard from './PricingCard';
import Carousel3D from 'react-spring-3d-carousel';
import Icon from '@ant-design/icons';

import LeftArrow from './icons/LeftArrow.svg?react';
import RightArrow from './icons/RightArrow.svg?react';
import PageSegment from './PageSegment';
import { useState } from 'react';

const pricingDetails = [
  {
    key: uniqueId(),
    content: (
      <PricingCard
        {...{
          title: 'Small Business',
          subTitle: 'Most Popular',
          currency: '$',
          price: 499,
          occurance: 'Per Month',
          benefits: [
            '60 hours. month',
            'Monthly Membership',
            '24/7 Assistance',
          ],
        }}
        key={uniqueId()}
      />
    ),
  },
  {
    key: uniqueId(),
    content: (
      <PricingCard
        {...{
          title: 'Medium Business',
          subTitle: '',
          currency: '$',
          price: 999,
          occurance: 'Per Month',
          benefits: [
            '60 hours. month',
            'Monthly Membership',
            '24/7 Assistance',
          ],
        }}
        key={uniqueId()}
      />
    ),
  },
  {
    key: uniqueId(),
    content: (
      <PricingCard
        {...{
          title: 'Enterprise',
          subTitle: '',
          occurance: 'Contact us for a custom plan',
          benefits: [
            '60 hours. month',
            'Monthly Membership',
            '24/7 Assistance',
          ],
        }}
        key={uniqueId()}
      />
    ),
  },
];

const PricingSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <PageSegment
      label="Our Business plans"
      title={
        <span>
          Pricing And Plans
          <Icon
            component={RightArrow}
            className="right"
            onClick={() => {
              if (currentSlide == pricingDetails.length - 1) {
                setCurrentSlide(0);
              } else {
                setCurrentSlide(currentSlide + 1);
              }
            }}
          />
          <Icon
            component={LeftArrow}
            className="right"
            onClick={() => {
              if (currentSlide == 0) {
                setCurrentSlide(2);
              } else {
                setCurrentSlide(currentSlide - 1);
              }
            }}
          />{' '}
        </span>
      }
      descripiton=""
      content={
        <div style={{ width: '50%', height: '500px', margin: '0 auto' }}>
          <Carousel3D
            goToSlide={currentSlide}
            slides={pricingDetails.map((pricingDetail, index) => ({
              ...pricingDetail,
              onClick: () => setCurrentSlide(index),
            }))}
            showNavigation={false}
          />
        </div>
      }
    />
  );
};

export default PricingSection;
