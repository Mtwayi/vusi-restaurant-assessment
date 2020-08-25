import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

import Delivery from "./components/Delivery";
import Order from './components/Order';

WebFont.load({
  google: {
    families: ['Muli:300,400,700,900', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
	   	<Switch>
	        <Route exact path="/" component={Delivery} />
	        <Route path="/order" component={Order} />
	  	</Switch>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();