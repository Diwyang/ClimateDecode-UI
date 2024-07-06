import styled from 'styled-components';
import Icon from '@ant-design/icons';
import React from 'react';
import { Typography } from 'antd';

const StyledLandingPage = styled.div`
  background-color: #f4f5f6;
  position: relative;
  width: 100%;
  border-radius: 8px;
  .count-wrapper {
    background-color: #4e888f;
    border-radius: 8px;
    height: 50px;
    width: 50px;
    position: absolute;
    left: -25px;
    display: flex;
    top: 20px;
    .text-wrapper {
      color: #ffffff;
      margin: auto;
      font-size: 25px;
      width: 16px;
    }
  }
  .overlap {
    margin-left: 25px;
    padding: 10px;
    padding-right: 50px;
    h4 {
      margin-top: 10px;
    }
    .icon-wrapper {
      position: absolute;
      right: 0;
      padding: 10px;
      top: 10px;
    }
  }
`;
const ListItem = ({
  count,
  IconComponent,
  title,
  descripiton,
}: {
  count: string | number;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  descripiton: string;
}) => {
  return (
    <StyledLandingPage>
      <div className="count-wrapper">
        <div className="text-wrapper">{count}</div>
      </div>

      <div className="overlap">
        <div className="icon-wrapper">
          <Icon component={IconComponent} style={{ fontSize: '50px' }} />
        </div>
        <Typography>
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Paragraph>{descripiton}</Typography.Paragraph>
        </Typography>
      </div>
    </StyledLandingPage>
  );
};

export default ListItem;
