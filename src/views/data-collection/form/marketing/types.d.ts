import { FormRule } from 'antd';

interface TableItem {
  key: string;
  mode: string;
  travellers: number;
  address: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text' | 'select';
  record: Item;
  index: number;
  children: React.ReactNode;
  options: any[];
  rules: FormRule[];
}
