import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore}from 'redux'

import SongsList from './components/SongsList'
import SongDetail from './components/SongDetail'
import reducers from './reducers/index'
import AddSong from './components/AddSong'



class App extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <SongsList />
                    <SongDetail />
                    <AddSong />
                </div>
            </div>
        )
    }
}
// any component inside provider gonna have access to the main store
// provider needs a store which gonna be built using redux createStore 
// createStore needs reucer to orgnise the data inside the store 
ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>
, document.querySelector('#container'))