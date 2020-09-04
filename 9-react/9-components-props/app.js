import React from 'react'
import ReactDOM from 'react-dom'

// function component
 const App = () => {
    //return <div>Hi there!</div>
    const text = 'Enter your name'
    return(
        <div>
            <label className="label" htmlFor = "name">{text}</label>
            <input type="text" id="name" style= {{backgroundColor: 'blue', color: 'white'}}/>
        </div>
    )
 }


// class component
// class App extends React.Component{
//     render(){
//         return <div>Hi there!</div>
//     }
// }
ReactDOM.render(<App />, document.querySelector('#container'))