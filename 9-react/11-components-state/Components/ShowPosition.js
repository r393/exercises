import React from 'react'
import getPosition from '../services/getPosition'

class ShowPosition extends React.Component{
    state = {lat: null, errorMessage: null}
    componentDidMount(){
        getPosition().then(position => {
            this.setState({lat: position.coords.latitude})
        }).catch(error => {
            this.setState({errorMessage: error.message})
        })
    }
    render(){
        // lat === null and errormessage === null
        // loading......

        // lat != null and errormessage === null
        // Your Latitude is: .....

        // lat === null and errormessage != null
        // error: ....
        if (this.state.lat === null && this.state.errorMessage === null){
            return(
                <div>
                    <div>Loading.......</div>
                </div>
            )
        } 

        if (this.state.lat !== null && this.state.errorMessage === null){
            return(
                <div>
                    <div>Your Latitude is: {this.state.lat} </div>
                </div>
            )
        } 

        if (this.state.lat === null && this.state.errorMessage !== null){
            return(
                <div>
                    <div>error: {this.state.errorMessage}</div>
                </div>
            )
        }

        
    }
}

export default ShowPosition