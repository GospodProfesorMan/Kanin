import axios from "axios";
import CONFIG from "../config.js"

export default class ScreenService {
    static async getScreen() {
        const response = await axios.get(`${CONFIG.strapi}/api/slide/${CONFIG.location}`);
        
        const s = response.data
        const templates = ['full', 'halfL-quarterUD', 'quarterUD-halfR', 'halfLR', 'halfUD']
        const presets = ['raw', 'table', 'weather']
        const lengthMap = {
            'full': 1,
            'halfL-quarterUD': 3,
            'quarterUD-halfR': 3,
            'halfLR': 2,
            'halfUD': 2
        }

        if(!Array.isArray(s)) return 'ERROR MESSAGE: slides are not array';
        for (let i = 0; i < s.length; i++) {
            if(!templates.includes(s[i].template)) console.error("Imporoper template type on element ",i,' in ',s)
            if(!Array.isArray(s[i].presets)) return 'ERROR MESSAGE: presets on element '+i+' are not array.'
            for (let j = 0; j < s[i].presets.length; j++) {
                if (s[i].presets.length !== lengthMap[s[i].template]) console.error('Improper amount of presets for the given template', s)
                if(!presets.includes(s[i].presets[j].preset)) console.error("Imporoper preset type on element ",i,' in ',s,' content will be displayed raw')
            }
        }
        
        return s
    }
}