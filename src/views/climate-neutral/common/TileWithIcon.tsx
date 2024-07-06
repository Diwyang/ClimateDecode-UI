import { Col, Image, Row, Typography } from 'antd';
import { uniqueId } from 'lodash';

const TileWithIcon = ({ data }: { data: any[][] }) => {
  return data.map((row) => (
    <Row gutter={[16, 24]} key={uniqueId('tile-with-icon-row')}>
      {row.map((column) => (
        <Col
          span={24 / row.length}
          key={uniqueId('tile-with-icon-col')}
          className="full-height"
        >
          <div className="advantage-box full-height">
            <div className="icon-container">
              <Image src={column.icon} height={90} width={90} />
            </div>
            <Typography style={{ height: '50px' }}>
              <Typography.Title level={3} style={{ marginTop: 0 }}>
                {column.title}
              </Typography.Title>
              <Typography.Paragraph>{column.description}</Typography.Paragraph>
            </Typography>
          </div>
        </Col>
      ))}
    </Row>
  ));
};

export default TileWithIcon;
