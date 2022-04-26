import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoimg from '../img/logo.png';
import background from '../img/background.jpg';
import axios from 'axios' 
import useCreateHook from './hooks/useCreateHook';
import "./Login.css";


function Login() {

  const api = axios.create({
    baseURL: 'http://localhost:9000/login'
  })
 
  let navigate = useNavigate(); 
 
  function login_submit(){

    alert(`Login Intialized!
          Username: ${inputs.username}
          `);
    api.post('/verify', {username:inputs.username, password:inputs.password })

    navigate('/home');
  }
 
  const {inputs, handleInputChange, handleSubmit} = useCreateHook(login_submit);
  
    
  function submit(){
    handleSubmit();
  }

  return (
    <>
    {/* here the login box code begins */}
    
<img className='background' src={background} alt="background.jpg"/>
 
  
 <div className="box">
 <label className='welcome my-3'>Welcome Back, Please login to your account.</label>
 <div className="container my-3">
      <form>
        <input name="username" type="text" className="username_details " id="exampleInputEmail1" value={inputs.username} onChange={handleInputChange} placeholder="Enter the Username"/>
        
        <input name="password" type="password" className="password_details" id="exampleInputPassword1" value={inputs.password} onChange={handleInputChange} placeholder="Enter the Password"/>
        
        <button className="login_button" type="submit" onClick={submit}>Login</button> 
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

export default Login



