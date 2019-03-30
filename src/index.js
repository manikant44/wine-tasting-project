import React from 'react';
import ReactDOM from 'react-dom';

/* importing styles in our app */
// bootstrap
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/css/bootstrap-theme.css"

import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
// own styles
import "./index.css"

import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

