import React from 'react';
import './App.css';
import Greeting from './Greeting.js';

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Greeting</small>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>

      
      <hr />
        

     
      <hr />

     
      
      <hr />
      
      
    </div>
  );
}

export default App;
