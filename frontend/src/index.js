import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CONFIG from './config'

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementsByTagName("body")[0].style.backgroundColor = CONFIG.darkmode ? "#666666" : "#ffffff"

console.log(CONFIG);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);