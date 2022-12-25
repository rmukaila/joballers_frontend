import React from 'react';

import JobTitle from './JobTitle.js';
import '../../styles/App.css';



function App() {
        
  
      const onSearchSubmit = event=>{
        event.preventDefault();
      };
    return (
      
      
      <div className="cols-3-lg App">
        
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to developer job post terms</h2>
          <form onSubmit={onSearchSubmit}>
            <input type='text' className='Search-bar' placeholder='Type job title' />
            <button type='submit' >Search</button>
          </form>
        </div>
        <p className="App-intro">
          Search results appear here.
          
        </p>
        <JobTitle/>
        <JobTitle/>
        <JobTitle/>      </div>
    );
  
}

export default App;
