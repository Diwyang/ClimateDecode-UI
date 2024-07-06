import { Affix, Avatar } from 'antd';
import './header.scss';

const AppHeader = () => {
  return (
    <Affix offsetTop={10} className="app-header">
      <span>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />{' '}
        Hrishabh Kumar
      </span>
    </Affix>
  );
};

export default AppHeader;
