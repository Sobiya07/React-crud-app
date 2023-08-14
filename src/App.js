
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Update from './Update';
import View from './View';


function App() {
  return (
 <Router>
 <Routes>
  <Route path='/'  element={<Home/>}></Route>
   <Route path='/create'  element={<Create/>}></Route>
    <Route path='/update/:setid'  element={<Update/>}></Route>
     <Route path='/view/:setid'  element={<View/>}></Route>
 </Routes>
 </Router>
  );
}

export default App;
