import axios from "axios";
import CONFIG from "../config.js"

export default async function getWeather() {
		const response = await axios.get(`${CONFIG.strapi}/api/vreme`);
		return response.data
}
//add error handling here or this is literraly useless