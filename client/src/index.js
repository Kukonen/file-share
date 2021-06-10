import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter} from "react-router-dom"


import App from './User/Components/App/App';
import Admin from './Admin/Components/Admin/Admin';


ReactDOM.render(
  <div>
    <BrowserRouter>
      <Route path = "/" component={App}/>
      <Route path = "/admin" component={Admin}/>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
