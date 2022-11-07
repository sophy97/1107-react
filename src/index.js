import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
// 리덕스 
//프로바이더 추가 후 store연결 - 방식:createStore(툴킷x)
import {Provider} from 'react-redux';
import { createStore } from 'redux';
//store에 추가할 counter state,action
//rootReducer를 통해 묶어서 한번에 사용 가능
import rootReducer from './modules';
//store생성
const store = createStore(rootReducer);

//아래도 provider통해 store연결
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
