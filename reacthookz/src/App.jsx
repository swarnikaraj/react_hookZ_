import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Timer } from './components/timer';

function App() {

 var starter={
  start:1,
  end:5
 }
 

  
  return (
    <div className="App">
        <Timer prop={starter}/>
         
    </div>
  );
}

export default App;
