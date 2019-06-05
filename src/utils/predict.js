import axios from 'axios';

export default async (body) => {
    try {
        const { data } = await axios.post(`${process.env.API_SERVER}/predict`, JSON.stringify(body), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return data;
    } catch(err) {
        console.error(err);
    }
}