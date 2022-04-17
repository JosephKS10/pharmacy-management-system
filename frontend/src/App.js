import './App.css';
import React from 'react';
import axios from 'axios'
import Login from './components/Login';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';

class App extends React.Component{


render(){
  return (
<>
<Routes>
  <Route exact path='/login' element={<Login/>} />
  <Route exact path='/home' element={<Home/>}/>
</Routes>

 


</>

  );
}
}
export default App;
