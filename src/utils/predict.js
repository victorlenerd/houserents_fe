import axios from 'axios';

const API_URL = process.env.API_SERVER || 'http://localhost:5000';

export default async (body, useServiceName) => {
    try {
        const { data } = await axios.post(`${useServiceName ? 'http://api:5000' : API_URL}/predict`, JSON.stringify(body), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return data;
    } catch(err) {
        console.error(err);
    }
}