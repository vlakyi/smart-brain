export const fetchData = async (url, payload, method) => {
    return fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...payload
        })
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
}