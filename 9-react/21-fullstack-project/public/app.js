import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'

const FirstPage = () => {
  return <div>First page</div>
}

const RegisterPage = () => {
  return (
    <div className="container">
        <h2>Register Form</h2>
      <div className="row">
          
          <div className="form-group">
        <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={FirstPage}/>
          <Route path="/register" exact component={RegisterPage}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))