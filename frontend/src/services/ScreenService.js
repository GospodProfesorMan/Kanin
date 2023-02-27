import axios from "axios";
import CONFIG from "../config.js"

export default class ScreenService {
    static async getScreen() {
        const response = await axios.get(`${CONFIG.strapi}/api/slide/${CONFIG.location}`);
        return response.data
    }
}//check if all si valid