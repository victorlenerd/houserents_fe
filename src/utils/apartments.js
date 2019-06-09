import axios from 'axios';

export default async (body, offset = 0, limit = 10) => {
    try {
        const { data } = await axios.post(`${process.env.API_SERVER}/apartments?offset=${offset}&limit=${limit}`, JSON.stringify(body), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return data;
    } catch(err) {
        console.error(err);
    }
}