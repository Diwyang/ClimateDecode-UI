import LayoutPage from '../layout/Layout';
import { Flex, Typography, theme } from 'antd';
import './homeScreen.scss';
import FormEnum from './FormEnum';
import DataCollectionForm from './DataCollectionForm';
import {
  getCurrentStep,
  getNextStep,
  getPrevStep,
} from '../layout/sidebar/fromSteps';
import { useLocation, useNavigate } from 'react-router-dom';

function HomeScreen() {
  const { token } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep = getCurrentStep(location.pathname);

  // const setFormData = (data: any) => {
  //   const finalData = { ...fullData, ...data };
  //   setFullData(finalData);
  //   if (steps[current]?.onChange) {
  //     dispatch(steps[current].onChange(finalData));
  //   }
  // };

  // const formItemLayout = (layout?: string) => {
  //   if (!layout || layout === 'horizontal') {
  //     return {
  //       labelCol: { span: 12 },
  //       wrapperCol: { span: 12 },
  //     };
  //   }
  //   return {};
  // };

  const next = () => {
    const step = getNextStep(location.pathname);
    navigate(`/dataCollection/${FormEnum[step.id].toLowerCase()}`);
  };

  const prev = () => {
    const step = getPrevStep(location.pathname);
    navigate(`/dataCollection/${FormEnum[step.id].toLowerCase()}`);
  };

  return (
    <LayoutPage>
      <Flex className="full-height no-overflow full-width">
        <Flex vertical className="main-form-container">
          <Typography.Title level={2} color={token.colorPrimary}>
            {currentStep.title}
          </Typography.Title>
          <Typography.Text type="secondary">
            {currentStep.description}
          </Typography.Text>
          <DataCollectionForm
            next={next}
            prev={prev}
            dataForm={currentStep.id}
          />
        </Flex>
      </Flex>
    </LayoutPage>
  );
}

export default HomeScreen;
