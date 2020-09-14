import React from 'react'
import {InputGroup, InputGroupAddon, InputGroupText, Button, Input} from 'reactstrap'
import MyModal from './Modal'
import register from '../services/register'

class RegisterForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        errorMessage: null
    }
    onSendBtnClick = () =>{
        let messageArr = []
        if(!this.state.firstName){
            messageArr.push ("Please enter you first Name")
        }
        if(!this.state.lastName){
            messageArr.push ("Please enter you last Name")
        }
        if(!this.state.email){
            messageArr.push ("Please enter you email")
        }
        if(!this.state.password){
            messageArr.push ("Please enter you password")
        }
        if(this.state.password != this.state.repassword){
            messageArr.push ("Password dose not match repassword")
        }

        const errorLi = messageArr.map((item, idx) => {
            return <li key={idx}>{item}</li>
        })
        if (errorLi.length){
            this.setState({errorMessage: <ul>{errorLi}</ul>})
        } else {
            register(this.state.firstName, this.state.lastName, this.state.email, this.state.password).then(data => {
                console.log(data);
            })
        }
    }
  render() {
    return (
      <React.Fragment>
          <MyModal modalTitle="Error" className="bg-danger" message={this.state.errorMessage} />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              First Name
            </InputGroupText>
          </InputGroupAddon>
          <Input value={this.state.firstName} onChange={(e) => {this.setState({firstName: e.target.value})}}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Last Name
            </InputGroupText>
          </InputGroupAddon>
          <Input value={this.state.lastName} onChange={(e) => {this.setState({lastName: e.target.value})}}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Email
            </InputGroupText>
          </InputGroupAddon>
          <Input type="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Password
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Re-Password
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" value={this.state.repassword} onChange={(e) => {this.setState({repassword: e.target.value})}}/>
        </InputGroup>
        <Button color="primary" onClick={this.onSendBtnClick}>Register</Button>
      </React.Fragment>
    )
  }
}

export default RegisterForm