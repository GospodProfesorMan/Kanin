import CONFIG from "../config.js"

export default async function getSchoolHours() {
	const response = await (await fetch(`${CONFIG.strapi}/api/odstevalnik/${CONFIG.location}`)).json();
	if(!Array.isArray(response)) return 'error, response is not array'
	let sum = 0
	for (let i = 0; i < response.length-1; i++) {
		if (typeof response[i] !== 'number') return  'error, response element is not number'
		sum += response[i]
	}
	if (response[response.length-1] !== 60*24 - sum + response[0]) return 'error, values don\'t add up'
	return response;
}
