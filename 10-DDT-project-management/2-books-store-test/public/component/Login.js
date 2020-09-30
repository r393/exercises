import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

import PopUpModal from './PopUpModal'
import {loginPost} from '../services/api'
import {setUserAction} from '../actions'

const Login = (props) => {


  useEffect(() => {
    props.setUserAction(null)
    
  }, []);


  const history = useHistory()
  const intialState = {
    email: '',
    password: '',
    entriesError: false,
    errorElement: null,
    errorTitle: ''
  }
  const [myState, setMyState] = useState(intialState)

  const onLoginBtnClick = (e) => {
    e.preventDefault()
    if (myState.email.trim() === '' || myState.password === '') {
      const errorElement = (
        <ul>
          {myState
            .email
            .trim() === ''
            ? <li>Email should not be empty</li>
            : null}
          {myState.password === ''
            ? <li>Password should not be empty</li>
            : null}
        </ul>
      )
      setMyState({
        ...myState,
        entriesError: true,
        errorElement,
        errorTitle: 'Entries Error'
      })
    } else {
      loginPost(myState.email, myState.password).then(data => {
        switch (data) {
          case 2:
            setMyState({... myState, entriesError: true, errorElement: <p>there was a server error</p>, errorTitle: 'Server Error' })
            break;
          case 3:
            setMyState({... myState, entriesError: true, errorElement: <p>Password is wrong</p>, errorTitle: 'Wrong password' })
            break;
          case 4:
            setMyState({... myState, entriesError: true, errorElement: <p>the email that you used is not exist</p>, errorTitle: 'Email not exist' })
            break;
          case 1:
            // show admin panel
            props.setUserAction(myState.email)
            history.push('/admin')
            break;
        
          default:
            break;
        }
      }).catch(error => {
        setMyState({... myState, entriesError: true, errorElement: <p>can not send the data</p>, errorTitle: 'unknown error' })
      })
    }
  }
  const closeModal = () => {
    setMyState({
      ...myState,
      entriesError: false
    })
  }

  //console.log(myState);

  return (
    <React.Fragment>
      <PopUpModal
        show={myState.entriesError}
        close={closeModal}
        className="bg-danger"
        title={myState.errorTitle}>
          {myState.errorElement}
        </PopUpModal>
      <div className="breadcrumb">
        <div className="container">
          <Link className="breadcrumb-item" to="/">Home</Link>
          <span className="breadcrumb-item active">Login</span>
        </div>
      </div>
      <section className="static about-sec">
        <div className="container">
          <h1>My Account / login</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only fiveLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
          </p>
          <div className="form">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="email"
                    placeholder="Enter User Name"
                    required
                    onChange={(e) => {
                    setMyState({
                      ...myState,
                      email: e.target.value
                    })
                  }}
                    value={myState.email}/>
                  <span className="required-star">*</span>
                </div>
                <div className="col-md-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                    setMyState({
                      ...myState,
                      password: e.target.value
                    })
                  }}
                    value={myState.password}/>
                  <span className="required-star">*</span>
                </div>

                <div className="col-md-4">
                  <button className="btn black" onClick={onLoginBtnClick}>Login</button>
                  <h5>not Registered?
                    <Link to="/register">register here</Link>
                  </h5>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default connect(null,{setUserAction})(Login)