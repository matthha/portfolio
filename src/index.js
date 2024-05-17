import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={
      { 
        cssVar: true, 
        token: {
        // Seed Token
        colorPrimary: '#86bbd8',
        borderRadius: 19,

        // Alias Token
        // '#2f4858' '#33658a' '#86bbd8' '#f6ae2d' '#f26419'
        colorBgContainer: '#fff',
        }, }
      }>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
