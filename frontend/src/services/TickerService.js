import axios from "axios";
import CONFIG from "../config.js"

export default class TickerService {
	static async getTicker() {
		const response = await axios.get(`${CONFIG.strapi}/api/ticker/${CONFIG.location}`);
		const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
		await sleep(500);
		return response.data;
	}
}