const register = (fname, lname, email, password) => {

    const data = {
        fname,
        lname,
        email,
        password
    }

    return new Promise((resolve, reject) => {
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status === 200){
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not send tha data response number: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })

    


}




export default register