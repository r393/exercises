import React from 'react'
import ReactDOM from 'react-dom'
import Oclock from './Components/Oclock'
//import getPosition from './services/getPosition'
import ShowPosition from './Components/ShowPosition';

// functional component
// const App = () => {
//     let lat = ''
//   window.navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       lat = position.coords.latitude

//     }, (error) => {
//       console.log(error);
//     },)

//     return <div>lat: {lat} </div>
// }

// class component
class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {lat: null, errorMessage: null}
    // }

    componentDidMount(){
        // //console.log('the component is mounted');
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         //console.log(position);
        //         // mistake
        //         // this.state.lat = position.coords.latitude

        //         this.setState({lat: position.coords.latitude})
        //     },
        //     (error) => {
        //         console.log(error);
        //         this.setState({errorMessage: error.message})
        //     }
        //     )
        // getPosition().then(position => {
        //     this.setState({lat: position.coords.latitude})
        // }).catch(error => {
        //     this.setState({errorMessage: error.message})
        // })
    }

    componentDidUpdate(){
        //console.log('the component is updated');
    }

    componentWillUnmount(){
        console.log('the component will be unmounted');
    }


    render(){



        return (
            <div>
                {/* <div>Your Latitude is: {this.state.lat} </div>
                <div>error: {this.state.errorMessage}</div> */}
                <ShowPosition />
                <Oclock />
            </div>

        )
    }
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))