import axios from "axios";
import CONFIG from "../config.js"

export default class TickerService {
	static async getTicker() {
		const response = await axios.get(`${CONFIG.strapi}/api/ticker/${CONFIG.location}`);
		if (typeof response.data === 'string') return response.data;
		return 'invalid ticker'
	}
}