import axios from "axios";
import CONFIG from "../config.js"

export default class SchoolHourService {
	static async getSchoolHours() {
		const response = await axios.get(`${CONFIG.strapi}/api/odstevalnik/${CONFIG.location}`);
		return response.data;
	}
}
