import {
  Avatar,
  Button,
  Card,
  Col,
  Collapse,
  CollapseProps,
  Form,
  Image,
  Input,
  Row,
  Typography,
  theme,
} from 'antd';
import Icon, {
  PlusOutlined,
  MinusOutlined,
  PhoneFilled,
  MailOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { Overlap } from './Overlap';
import PageSegment from './PageSegment';
import StyledLandingPage from './WebWrapper.styled';
import { uniqueId } from 'lodash';

import measureAndMonitor from './img/measure-and-monitor.png';
import purchaseCarbonCredit from './img/puchase-carbon-credit.png';
import verifiedCarbonCredit from './img/verified-carbon.png';
import TileWithIcon from './common/TileWithIcon';

import carbonNeutrality from './icons/carbon-neutrality.svg';
import corporateSocialResponsibility from './icons/corporate-social-responsibility.svg';
import commitment from './icons/commitment.svg';
import competitiveAdvantage from './icons/competitive-advantage.svg';

import demo from './img/demo.png';

import PricingSection from './PricingSection';
import BottomCarousel from './BottomCarousel';
import Footer from './Footer';
import quoteIcon from './icons/quote-icon.svg?react';

const firstTiles = [
  {
    image: measureAndMonitor,
    title: 'Measure & Monitor',
    description:
      'Our platform provides comprehensive tools to measure and monitor carbon emissions across your entire value chain and speciﬁc events, ensuring accurate data.',
  },
  {
    image: purchaseCarbonCredit,
    title: 'Purchase Carbon Credits',
    description:
      'Offset your carbon footprint by purchasing high-quality carbon credits from certiﬁed projects, supporting sustainable initiatives worldwide.',
  },
  {
    image: verifiedCarbonCredit,
    title: 'Verified Carbon Neutral Label',
    description:
      'By actively measuring emissions and offsetting them, your company can proudly display the veriﬁed carbon neutral label, setting you apart as a sustainability leader.',
  },
];

const benefits = [
  [
    {
      icon: carbonNeutrality,
      title: 'Achieve Carbon Neutrality',
      description:
        'Obtain the veriﬁed carbon neutral label, signaling your commitment to combating climate change and reducing environmental impact.',
    },
    {
      icon: corporateSocialResponsibility,
      title: 'Enhance Corporate Sustainability',
      description:
        'By accurately measuring emissions and offsetting them, you boost your corporate sustainability proﬁle, attracting eco-conscious stakeholders.',
    },
  ],
  [
    {
      icon: commitment,
      title: 'Demonstrate Commitment',
      description:
        'Embrace corporate social responsibility and show dedication to a sustainable future through transparent carbon management practices',
    },
    {
      icon: competitiveAdvantage,
      title: 'Gain Competitive Advantage',
      description:
        'Stand out in the market by aligning your brand with eco-conscious values, attracting customers who prioritize environmentally responsible partners.',
    },
  ],
];

const testimonials = [
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
  {
    name: 'Raymond Stuart',
    jobTitle: 'Tech Enthusiast',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation`,
  },
];

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
`;
const faqs: CollapseProps['items'] = [
  {
    key: '1',
    label: 'How can carbon management benefit my business',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Are the carbon credits purchased through the platform verified',
    children: <p>{text}</p>,
    showArrow: true,
  },
  {
    key: '3',
    label: 'Is the carbon neutral label recognized internationally',
    children: <p>{text}</p>,
    showArrow: true,
  },
];

const LandingPage = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <StyledLandingPage
      $backround="/landing-page-banner.png"
      $backroundheight="700px"
    >
      <Overlap
        title="Transform Your Business with Verified Carbon Neutrality"
        description="Introducing climate decode carbon management platform, empowering companies to measure value chain and event-based emissions while achieving a veriﬁed carbon neutral label."
        extraContent={
          <Button size="large" style={{ width: '150px' }}>
            Sign Up
          </Button>
        }
      />
      {/** part */}
      <div className="page-content">
        <PageSegment
          label=""
          title="Offsetting Remaining Emissions"
          descripiton="Offset the unavoidable emissions by supporting verified carbon
          offset projects."
          content={
            <Row gutter={24}>
              {firstTiles.map((data) => (
                <Col span={8} key={uniqueId()}>
                  <div
                    className="card-with-image"
                    style={{ backgroundColor: '#d9f1f4', border: 'none' }}
                  >
                    <Avatar size={100} src={data.image} />
                    <Typography.Title level={3}>{data.title}</Typography.Title>
                    <div style={{ padding: '30px' }}>{data.description}</div>
                  </div>
                </Col>
              ))}
            </Row>
          }
        />
        <PageSegment
          label="Learn about Platform"
          title="Benefits of Our Platform"
          descripiton=""
          content={<TileWithIcon data={benefits} />}
        />
        <div
          style={{
            background: 'url(/net-zero.png)',
            height: '300px',
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
            backgroundSize: '100% 300px',
          }}
        >
          <Typography
            style={{
              backgroundColor: 'rgba(0,0,0, 0.3)',
              padding: '20px',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <Typography.Title level={3} style={{ color: '#fff' }}>
              Create a Label for Climate Neutral Event
            </Typography.Title>
            <Typography.Paragraph style={{ color: '#fff' }}>
              Welcome to the world of climate neutral events where
              sustainability and environmental consciousness are the stars of
              the show. Lets explore the steps to create a label for your event.
            </Typography.Paragraph>
            <Button size="large">Learn More</Button>
          </Typography>
        </div>
        <PageSegment
          label="How Can We Help"
          title="FAQ"
          descripiton=""
          content={
            <Collapse
              defaultActiveKey={['1']}
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
              items={faqs}
            />
          }
        />
        <PageSegment
          label="Contact Us"
          title="Get in Touch With Us"
          descripiton=""
          content={
            <Row>
              <Col
                span={12}
                style={{ border: '1px solid #ccc', padding: '20px' }}
              >
                <Typography.Paragraph>
                  Have questions about our carbon management platform? Reach out
                  to our dedicated team for a live demo or to request additional
                  information.
                </Typography.Paragraph>
                <Row>
                  <Col span={12}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PhoneFilled
                        style={{
                          fontSize: '20px',
                          float: 'left',
                          marginRight: '10px',
                        }}
                      />
                      <div>
                        <div>Phone Number</div>
                        <div style={{ fontSize: '10px' }}>Phone Number</div>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <MailOutlined
                        style={{
                          fontSize: '20px',
                          float: 'left',
                          marginRight: '10px',
                        }}
                      />
                      <div>
                        <div>Email Address</div>
                        <div style={{ fontSize: '10px' }}>
                          info@climatedecode.com
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Typography.Title level={5}>
                  Feel Free To Ask Something We Are Here
                </Typography.Title>
                <Form layout="vertical">
                  <Form.Item label="EMAIL" name="email">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Message" name="message">
                    <Input.TextArea />
                  </Form.Item>
                </Form>
                <Form.Item>
                  <Button type="primary" shape="round">
                    Send now
                  </Button>
                </Form.Item>
              </Col>
              <Col
                span={12}
                style={{
                  border: '1px solid #ccc',
                  padding: '20px',
                  backgroundColor: colorPrimary,
                }}
              >
                <Typography.Title
                  level={5}
                  style={{ color: '#fff', marginTop: 0 }}
                >
                  Request a Demo
                </Typography.Title>
                <Typography.Paragraph style={{ color: '#fff' }}>
                  Experience the power of our platform ﬁrsthand. Request a
                  personalized demo tailored to your business needs and
                  sustainability objectives.
                </Typography.Paragraph>
                <Image
                  width="100%"
                  height={200}
                  preview={{
                    mask: (
                      <CaretRightOutlined
                        color="#fff"
                        style={{ fontSize: '30px' }}
                      />
                    ),
                  }}
                  src={demo}
                />
                <Button style={{ marginTop: '20px', float: 'right' }}>
                  <CaretRightOutlined /> Watch Demo
                </Button>
              </Col>
            </Row>
          }
        />
        <PageSegment
          label="What are client say about Us"
          title="Testimonials"
          descripiton=""
          className="slider"
          content={
            <Row gutter={[16, 26]} className="slide-track">
              {testimonials.map((testimonial) => (
                <Col span={4} key={uniqueId()} className="slide">
                  <Card
                    style={{ padding: 20 }}
                    cover={
                      <>
                        <Typography.Paragraph>
                          <Icon
                            component={quoteIcon}
                            style={{
                              fontSize: 20,
                              float: 'left',
                              color: colorPrimary,
                              opacity: 0.5,
                            }}
                          />
                          {testimonial.text}
                        </Typography.Paragraph>
                      </>
                    }
                  >
                    <Card.Meta
                      avatar={
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                      }
                      title={testimonial.name}
                      description={testimonial.jobTitle}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          }
        />
        <PricingSection />
      </div>
      <BottomCarousel />
      <Footer />
    </StyledLandingPage>
  );
};

export default LandingPage;
