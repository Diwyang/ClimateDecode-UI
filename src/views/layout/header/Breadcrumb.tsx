import { Breadcrumb } from 'antd';

interface AppBreadcrumbProps {
  page: { breadcrumbs: string[]; name: string };
}

const AppBreadcrumb = ({ page: { breadcrumbs, name } }: AppBreadcrumbProps) => {
  const breadcrumbsArr = [...breadcrumbs, name];
  return (
    <Breadcrumb>
      {breadcrumbsArr.map((breadcrumb) => (
        <Breadcrumb.Item key={'breadcrumb-test'}>{breadcrumb}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
