import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import About from './components/About';
// import { SwitchAccessShortcut } from '@mui/icons-material';

ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}

    <BrowserRouter>
<Switch>
<Route path="/About" component={About}/>
<Route path="/" component={App}/>
</Switch>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 