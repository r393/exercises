const getWiki = (keyWord) => {
    //console.log('this keyword in wikipedia ', keyWord);
    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch= '+ keyWord
    return new Promise ((resolve, reject) => {
        fetch(url).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('data can not be loaded . response number' + response.status))
            }
        }).catch(error => {
            reject(erro)
        })
    })
}
export default getWiki