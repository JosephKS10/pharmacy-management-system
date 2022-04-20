import React, { Component } from 'react';
import homebackground from '../img/background2.png';
import logoimg from '../img/logo.png';
import axios from 'axios';
import CreateModal from './CreateModal';



export default function home() {
  return (
    <>
    
    <img className='home_background' src={homebackground} alt="background.jpg"/>

    <div className="container_for_bar">
    <img className='home_logo' src={logoimg} alt="logo.png" />
    <input type="text" className='search_bar' placeholder='Search Entry...' />
    <div className="button_container">
    <button className='view_button'>View Dataset</button>
    <button className='create_button'>Create Entry</button>
    
    </div>
    </div>
    <CreateModal/>
    
    </>
  )
}
