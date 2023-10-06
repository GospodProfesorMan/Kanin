import axios from "axios";
import CONFIG from "../config.js"

export default async function getSchoolHours() {
	const response = await axios.get(`${CONFIG.strapi}/api/odstevalnik/${CONFIG.location}`);
	if(!Array.isArray(response.data)) return 'error, response is not array'
	let sum = 0
	for (let i = 0; i < response.data.length-1; i++) {
		if (typeof response.data[i] !== 'number') return  'error, response element is not number'
		sum += response.data[i]
	}
	if (response.data[response.data.length-1] !== 60*24 - sum + response.data[0]) return 'error, values don\'t add up'
	return response.data;
}
