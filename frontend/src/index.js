import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CONFIG from './config'

import "./assets/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementsByTagName("body")[0].style.backgroundColor = CONFIG.darkmode ? "#666666" : "#ffffff"

console.log(CONFIG);
root.render(
		<App />
);