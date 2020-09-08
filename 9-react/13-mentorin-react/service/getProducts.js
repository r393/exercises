const getProducts = (keyWord, numPerPage, pageNum) => {
    return new Promise((resolve, reject) => {
        const url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
        let obj = {
            "requests":[
                {
                    "indexName": "ikea",
                    "params": "query=" + keyWord + "&hitsPerPage=" + numPerPage + "&page=" + pageNum
                }
            ]
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            }
        }).catch(err => {
            reject(err);
        })
    })
}
export default getProducts;