import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CONFIG from './config'

import "./assets/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementsByTagName("body")[0].style.backgroundColor = CONFIG.darkmode ? "#666666" : "#ffffff"
if (CONFIG.font) document.getElementById('root').style.fontFamily = CONFIG.font

console.log(CONFIG);
root.render(
		<App />
);