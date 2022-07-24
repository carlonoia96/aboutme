import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Home/Home";

function App() {
  return (
      <div className={'container'}>
        <Routes>
          <Route path="/aboutme" element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
