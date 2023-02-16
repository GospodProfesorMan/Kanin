import axios from "axios";
import CONFIG from "../config.js"

export default class ScreenService {
    static async getScreen() {
        const response = await axios.get(`${CONFIG.strapi}/api/slide/${CONFIG.location}`);
        const obj = []
        response.data.forEach(slide => {
            obj.push({
                type: slide.type,
                content: [
                    slide.content[0] ? slide.content[0].content : "",
                    slide.content[1] ? slide.content[1].content : "",
                    slide.content[2] ? slide.content[2].content : "",
                    slide.content[3] ? slide.content[3].content : "",
                ]
            })

        })
        return obj
    }
}