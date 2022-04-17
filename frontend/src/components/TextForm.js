import React, { Component } from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'

const api = axios.create({
   baseURL: 'http://localhost:9000/login'
 })

export default class TextForm extends Component {

  state = {
    username: "",
    password: ""
  }
 

  handleChange = args => (event) => {
    console.log(event.target.value)
    this.setState({
      [args] : event.target.value,
      
    })
  }

  handleLogin = async (event) => {
    event.preventDefault()
    let res = await api.post('/verify', {username:this.state.username, password: this.state.password})
    console.log(res.statusText)
    if(res.status === 200){
      console.log("will redirect to the other page")
    
    }
  }
  
  render() {

    const {username, password} = this.state;
    return (
      <form>
      <div className="form-group my-3">
        <br />
        <input name="username" type="text" className="username_details " id="exampleInputEmail1" value={username} onChange={this.handleChange('username')} placeholder="Enter the Username"/>
        
      </div>
      <div className="form-group my-3">
        <input name="password" type="password" className="password_details" id="exampleInputPassword1" value={password} onChange={this.handleChange('password')} placeholder="Enter the Password"/>
      </div>
        
      <button className="login_button" type="submit" onClick={this.handleLogin}>Login</button>
      
    </form>
    )
  }
}
