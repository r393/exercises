import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './components/Nav'

const App = () => {
  return (
    <Nav />
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))