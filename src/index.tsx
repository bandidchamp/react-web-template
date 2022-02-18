import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import configureStore from "./store";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { LayoutProvider } from 'context/useContextApp';

import { ThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import GlobalMUITheme from './styles/GlobalMUITheme';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutProvider>
        <ThemeProvider theme={GlobalMUITheme}>
          <MuiThemeProvider theme={GlobalMUITheme}>
            <App />
          </MuiThemeProvider>
        </ThemeProvider>
      </LayoutProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
