export default async (data) => {
    console.log(process.env.API_SERVER);
    return fetch(`http://localhost:5000/predict`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then((res) => res.json())
}