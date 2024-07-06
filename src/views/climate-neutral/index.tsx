import React from 'react';
import { Overlap } from './Overlap';
import './landingPage.scss';
import { Avatar, Col, Image, List, Row, Typography, theme } from 'antd';
import Icon, { CheckCircleFilled } from '@ant-design/icons';
import eventImg from './img/event.png';
import strategyIcon from './icons/branding-strategy.svg';
import sponserIcon from './icons/sponsor.svg';
import newsIcon from './icons/news.svg';
import seedingIcon from './icons/hand-with-a-seedling.svg';
import ListItem from './Overlap/ListItem/LIstItem';
// ICONS
import Emission from './icons/CO2-emission.svg?react';
import Measure from './icons/measure.svg?react';
import Target from './icons/target.svg?react';
import Graph from './icons/graph.svg?react';
import Communicate from './icons/communicate.svg?react';
import GetStarted from './icons/get-started.svg?react';

// part 3
import recycle from './img/recycle.jpeg';
import recycleBin from './img/recycle-bin.jpeg';
import cycle from './img/cycle.jpeg';
import { uniqueId } from 'lodash';

// part 4
import GreenEnergy from './icons/green-energy.svg?react';
import Reforestation from './icons/reforestation.svg?react';
import Methane from './icons/methane.svg?react';
import AddHand from './icons/add_hand.svg?react';
import glacier from './img/glacier.jpeg';

import BottomCarousel from './BottomCarousel';
import Footer from './Footer';
import TileWithIcon from './common/TileWithIcon';
import PageSegment from './PageSegment';
import StyledLandingPage from './WebWrapper.styled';
import PricingSection from './PricingSection';

const data = [
  {
    title: 'Minimizing energy consumption',
  },
  {
    title: 'Optimizing waste management',
  },
  {
    title: 'Reducing water consumption',
  },
  {
    title: 'Promoting sustainable transportation',
  },
];

const commitmentData = [
  {
    title:
      'Share information through event websites and social media platforms.',
  },
  {
    title: 'Create engaging and educational signage about carbon neutrality',
  },
  {
    title: 'Offer educational sessions or workshops to raise awareness.',
  },
  {
    title:
      'Encourage attendees to contribute by adopting sustainable practices.',
  },
];

const calculateList = [
  {
    id: 1,
    title: 'MEASURE',
    description: 'Define boundaries and quantify GHG emissions',
    icon: Measure,
  },
  {
    id: 2,
    title: 'SET TARGET',
    description:
      'Develop a GHG emissions reduction plan and set targets in line with science',
    icon: Target,
  },
  {
    id: 3,
    title: 'ABATE EMISSIONS',
    description: 'Reduce GHG emissions according to the reduction plan',
    icon: Graph,
  },
  {
    id: 4,
    title: 'COMPENSATE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    icon: Emission,
  },
  {
    id: 5,
    title: 'COMMUNICATE AND REVIEW',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    icon: Communicate,
  },
  {
    id: 6,
    title: 'GET STARTED',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    icon: GetStarted,
  },
];

const reductionMethods = [
  {
    title: 'Energy- Efficient  Lighting',
    image: recycle,
    description:
      'Use LED lights and energy- saving fixtures to reduce electricity consumption.',
  },
  {
    title: 'Waste Reduction',
    image: recycleBin,
    description:
      'Minimize waste through recycling, composting and using reusable and biodegradable materials.',
  },
  {
    title: 'Green Transportation',
    image: cycle,
    description:
      'Promote public transportation, carpools, and offer bike- sharing programs to reduce attendeed carbon emissions.',
  },
];

const offsettingRemainigEmission = [
  {
    title: 'Renewable Energy Projects',
    image: GreenEnergy,
    description:
      'Invest in wind or solar energy projects that reduce the amount of traditional fossil fuel-based energy being produced.',
  },
  {
    title: 'Reforestation Programs',
    image: Reforestation,
    description:
      'Support initiatives that plant trees to absorb CO2 from the atmosphere, combating deforestation and promoting biodiversity.',
  },
  {
    title: 'Methane Capture Projects',
    image: Methane,
    description:
      'Promote public transportation, carpools, and offer bike- sharing programs to reduce attendeed carbon emissions.',
  },
  {
    title: 'More Projects',
    image: AddHand,
    description:
      'Support initiatives that plant trees to absorb CO2 from the atmosphere, combating deforestation and promoting biodiversity.',
  },
];

const advantages = [
  [
    {
      icon: strategyIcon,
      title: null,
      description:
        'Enhanced brand reputation and perception as a responsible event organizer',
    },
    {
      icon: sponserIcon,
      title: null,
      description:
        'Attracting eco-conscious attendees and sponsors who value sustainability.',
    },
    {
      icon: newsIcon,
      title: null,
      description:
        'Positive media coverage and increased public awareness of your event.',
    },
    {
      icon: seedingIcon,
      title: null,
      description:
        'Setting an example for other events and driving industry-wide sustainable practices.',
    },
  ],
];

const ClimateNeutral: React.FC = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <StyledLandingPage>
      <Overlap
        color="#fff"
        title="Create a Label for Climate Neutral Event"
        description="Welcome to the world of climate neutral events where
        sustainability and environmental consciousness are the stars of
        the show. Lets explore the steps to create a label for your event."
      />
      {/** part */}
      <div className="page-content">
        <Row gutter={16}>
          <Col span={12}>
            <Image
              src={eventImg}
              width={'100%'}
              preview={false}
              style={{ maxHeight: '350px' }}
            />
          </Col>
          <Col span={12}>
            <Typography>
              <Typography.Title level={3}>
                What is a Climate Neutral Event?
              </Typography.Title>
              <Typography.Paragraph>
                A climate neutral event refers to an event where all greenhouse
                gas emissions produced, both directly and indirectly, are offset
                or reduced to achieve a net zero carbon footprint.
              </Typography.Paragraph>
            </Typography>
            <List
              itemLayout="horizontal"
              dataSource={data}
              className="event-list"
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <CheckCircleFilled
                        style={{ fontSize: '25px', color: colorPrimary }}
                      />
                    }
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        {/** part */}
        <PageSegment
          label="Why should you apply"
          title="Advantages of Being a Climate Neutral Event"
          descripiton="Besides environmental benefits, being a climate neutral event provides
          numerous advantages:"
          content={<TileWithIcon data={advantages} />}
        />
        {/** part */}
        <PageSegment
          label="How Can We Help"
          title="Calculating Carbon Footprint"
          descripiton="Calculate the event&#39;s carbon footprint by examining various
          factors:"
          content={
            <div className="calulate-list">
              {calculateList.map((data) => (
                <ListItem
                  key={data.id}
                  count={data.id}
                  IconComponent={data.icon}
                  title={data.title}
                  descripiton={data.description}
                />
              ))}
            </div>
          }
        />
        {/** part */}
        <PageSegment
          label="Practices"
          title="Reducing Emissions Through Sustainable Practices"
          descripiton="Calculate the event&#39;s carbon footprint by examining various
          factors:"
          content={
            <Row gutter={24}>
              {reductionMethods.map((data) => (
                <Col span={8} key={uniqueId()}>
                  <div className="card-with-image">
                    <Typography.Title level={3}>{data.title}</Typography.Title>
                    <div>
                      <Image src={data.image} height="100%" width="100%" />
                    </div>
                    <div style={{ paddingTop: '50px' }}>{data.description}</div>
                  </div>
                </Col>
              ))}
            </Row>
          }
        />
        {/** part */}
        <PageSegment
          label="Practices"
          title="Offsetting Remaining Emissions"
          descripiton="Offset the unavoidable emissions by supporting verified carbon
          offset projects."
          content={
            <Row gutter={24}>
              {offsettingRemainigEmission.map((data) => (
                <Col span={6} key={uniqueId()}>
                  <div className="card-with-image">
                    <Avatar size={100} icon={<Icon component={data.image} />} />
                    <Typography.Title level={3}>{data.title}</Typography.Title>
                    <div style={{ padding: '30px' }}>{data.description}</div>
                  </div>
                </Col>
              ))}
            </Row>
          }
        />
        {/** part */}
        <PageSegment
          label="Labels"
          title="Selecting an Appropriate Label"
          descripiton="Choose a recognizable and credible label to indicate your events
          commitment to carbon neutrality."
          content={
            <Row gutter={24}>
              <Col span={12} key={uniqueId()}>
                <Image
                  src={glacier}
                  width={'100%'}
                  style={{ maxHeight: '350px' }}
                  preview={false}
                />
              </Col>
              <Col span={12} key={uniqueId()}>
                <Row
                  style={{
                    height: '50%',
                    paddingBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: colorPrimary,
                      width: '100%',
                      padding: '10px',
                      borderRadius: '16px',
                    }}
                  >
                    <Typography>
                      <Typography.Title level={3} style={{ color: '#fff' }}>
                        Carbon Neutral CertiﬁIed
                      </Typography.Title>
                      <Typography.Paragraph style={{ color: '#fff' }}>
                        Display a certification from a recognized climate action
                        organization, ensuring credibility and transparency{' '}
                      </Typography.Paragraph>
                    </Typography>
                  </div>
                </Row>
                <Row
                  style={{
                    height: '50%',
                    paddingTop: '10px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: colorPrimary,
                      width: '100%',
                      padding: '10px',
                      borderRadius: '16px',
                    }}
                  >
                    <Typography>
                      <Typography.Title level={3} style={{ color: '#fff' }}>
                        Climate Friendly Event
                      </Typography.Title>
                      <Typography.Paragraph style={{ color: '#fff' }}>
                        Highlight your event&#39;s commitment to reducing its
                        environment impact, attracting a conscious and eco-savvy
                        audience.
                      </Typography.Paragraph>
                    </Typography>
                  </div>
                </Row>
              </Col>
            </Row>
          }
        />
        {/** part */}
        <PageSegment
          label="Commitment"
          title="Communicating Your Commitment to Attendees"
          descripiton="Effectively convey your event’s dedication to sustainability to
          attendees:"
          content={
            <List
              itemLayout="horizontal"
              dataSource={commitmentData}
              className="event-list"
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <CheckCircleFilled
                        style={{ fontSize: '25px', color: colorPrimary }}
                      />
                    }
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          }
        />
        {/** part */}
        <PricingSection />
      </div>
      <BottomCarousel />
      <Footer />
    </StyledLandingPage>
  );
};

export default ClimateNeutral;
