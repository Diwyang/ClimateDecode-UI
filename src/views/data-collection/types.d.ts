import { FormRule } from 'antd';

interface Item {
  label: string;
  fieldName: string;
  type?: string;
  options?: DefaultOptionType[] | undefined;
  suffix?: string;
  rules?: FormRule[];
  formatter?: any;
  parser?: any;
  placeholder?: string;
  dependencies?: string[];
}
