import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


import Router from './component/Router'
import reducer from './reducers'

class App  extends React.Component{
    
    render(){
        return(
            <Router>
                <div>Hi there!</div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Provider store={createStore(reducer)} >
        <App />
    </Provider>

, document.querySelector('#container'))