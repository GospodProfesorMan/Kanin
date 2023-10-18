import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import getSettings from './services/settingsService';

import "./assets/main.css"

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

getSettings().then(settings => {
	rootElement.style.setProperty("--root-background-color", settings.theme.background)
	rootElement.style.setProperty("--root-text-color", settings.theme.text)
	rootElement.style.fontFamily = settings.font
})

root.render(
		<App />
);