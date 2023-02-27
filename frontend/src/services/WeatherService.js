import axios from "axios";
import CONFIG from "../config.js"

export default class WeatherBig {
	static async getWeather() {
		const response = await axios.get(`${CONFIG.strapi}/api/vreme`);
		return response.data
	}
}