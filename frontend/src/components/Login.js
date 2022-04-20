import React, { Component } from 'react'
import logoimg from '../img/logo.png';
import background from '../img/background.jpg';
import axios from 'axios' 

const api = axios.create({
  baseURL: 'http://localhost:9000/login'
})

export default class login extends Component {
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
    event.preventDefault();
    let res = await api.post('/verify', {username:this.state.username, password: this.state.password})
    console.log(res.statusText)
    if(res.status === 200){
      console.log("will redirect to the other page"); 
    }
    
  }

  render() {
    const {username, password} = this.state;
   
    return (
    <>
    {/* here the login box code begins */}
    
<img className='background' src={background} alt="background.jpg"/>
 
  
 <div className="box">
 <label className='welcome my-3'>Welcome Back, Please login to your account.</label>
 <div className="container my-3">
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
 </div>  
 </div>
 {/* here the login box code ends */}
 
 {/* here the text and email button code begins*/}
 <div className="container_for_logo">
   <img className='logo' src={logoimg} alt="logo.png" />
   <br />
   <label className='welcome2'>Welcome to the <br /> Pharma User Area </label>
   <br />
   <label className='request'>To request an account, <br /> just email us.</label>
   <br />
   <a href="mailto:jjbrothers123@gmail.com?cc=&bcc=&subject=New Account Creation&body=Hereby I attach my employee information for the creation of new account.%0DEmployee ID: %0DFirst Name: %0DLast Name: %0D"><i className="emaillogo fa-solid fa-envelope fa-4x"/></a>

 </div>

  {/* here the text and email button code ends*/}
    </>
    )
  }
}


