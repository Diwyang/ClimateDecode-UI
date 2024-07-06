import ReactDOM from 'react-dom/client';
import WebApp from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { App, ConfigProvider, theme } from 'antd';

const appTheme = [theme.defaultAlgorithm, theme.compactAlgorithm];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4E888F',
          colorBorder: '#a3c1c4',
        },
        algorithm: appTheme,
        components: {
          Collapse: {
            headerBg: '#EBEFEF',
          },
        },
      }}
    >
      <App>
        <WebApp />
      </App>
    </ConfigProvider>
  </Provider>
);
