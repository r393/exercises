const getPosition = () => {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //console.log(position);
                // mistake 
                // this.state.lat = position.coords.latitude

                // this.setState({lat: position.coords.latitude})
                resolve(position)
            }, 
            (error) => {
                // console.log(error);
                // this.setState({errorMessage: error.message})
                reject(error)
            }
            )
    })
}

export default getPosition