import axios from 'axios';

export default async (body, useServiceName) => {
    try {
        const { data } = await axios.post(`${useServiceName ? 'http://api:5000' : process.env.API_SERVER}/predict`, JSON.stringify(body), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return data;
    } catch(err) {
        console.error(err);
    }
}