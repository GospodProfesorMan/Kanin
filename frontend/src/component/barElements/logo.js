import CONFIG from "../../config"
import { useContext } from "react";
import { barElementSettingsContext } from '../../services/barContext';

export default function Logo() {
    const settings = useContext(barElementSettingsContext);
    return <div className="logo" style={{backgroundImage:"url("+CONFIG.strapi+settings.settings+")"}}/>
}
//settings is the logourl given by bar Component. will perhaps be changed to hold more values in the future. confusing name