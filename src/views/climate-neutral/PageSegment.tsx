import { Typography } from 'antd';

const PageSegment = ({
  label,
  title,
  descripiton,
  content,
  className,
}: {
  label: string;
  title: string | JSX.Element;
  descripiton: string;
  content: JSX.Element;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className="frame">
        <div className="text-wrapper">{label}</div>
      </div>
      <Typography>
        <Typography.Title level={2}>{title}</Typography.Title>
        <Typography.Paragraph>{descripiton}</Typography.Paragraph>
      </Typography>
      {content}
    </div>
  );
};

export default PageSegment;
