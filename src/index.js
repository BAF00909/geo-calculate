import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router, HashRouter} from "react-router-dom";

ReactDOM.render(
<React.StrictMode>
	<HashRouter>
    	<App />
	</HashRouter>
</React.StrictMode>,
  document.getElementById('root')
);

