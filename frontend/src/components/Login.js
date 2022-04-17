import React, { Component } from 'react'
import TextForm from './TextForm';
import logoimg from '../img/logo.png';
import background from '../img/background.jpg';


export default class login extends Component {
  render() {
    return (
    <>
    {/* here the login box code begins */}

<img className='background' src={background} alt="background.jpg"/>
 
  
 <div className="box">
 <label className='welcome my-3'>Welcome Back, Please login to your account.</label>
 <div className="container my-3">
 <TextForm/>
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
