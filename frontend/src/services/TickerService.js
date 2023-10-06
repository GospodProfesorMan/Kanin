import axios from "axios";
import CONFIG from "../config.js"

export default async function getTicker() {
	const response = await axios.get(`${CONFIG.strapi}/api/ticker/${CONFIG.location}`);
	if (Array.isArray(response.data)) return response.data;
	return ['invalid ticker']
}