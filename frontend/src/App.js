import BarComponent from "./component/barComponent";
// import MainFooter from "./component/MainFooter";
import Screen from "./component/screens";
import getSettings from './services/settingsService';
import { useEffect, useState } from "react";

const rootElement = document.getElementById('root')

export default function App() {
	const [settingsState, setSettings] = useState(null);
	useEffect(() => {
		getSettings().then(settings => {
			rootElement.style.setProperty("--root-background-color", settings.theme.background)
			rootElement.style.setProperty("--root-text-color", settings.theme.text)
			rootElement.style.fontFamily = settings.font
			setSettings(settings)
		})
	}, [])
	return (
		settingsState ? <div>
			<BarComponent settings={settingsState.headerSettings} giveKey={"top"}/>
			<Screen />
			<BarComponent settings={settingsState.footerSettings} giveKey={"bottom"}/>
		</div> : <div className="loading screen" style={{display: "block"}}>
            <div className="loadingIcon"></div>
            <div className="loadingText">loading your configuration</div>
        </div>
	);
}