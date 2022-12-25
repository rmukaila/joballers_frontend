import React from 'react';

import JobTitle from './JobTitle.js';
import Filtering  from './components/Filtering.js';
import '../../styles/App.css';



import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
        
  
      const onSearchSubmit = event=>{
        event.preventDefault();
      };
    return (
      
      // <div className='container'>
      //     
              <div className="App">
                
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

                <div className='row'>
                    <div className='col-md-3'>
                      <Filtering/>
                    </div>

                    <div className='col-md-6'>
                      <JobTitle/>
                      <JobTitle/>
                      <JobTitle/> 
                    </div>

                    <div className='col-md-3'></div>
                </div>  
                       
              </div>
                
      //       

      // </div>
    );
  
}

export default App;
