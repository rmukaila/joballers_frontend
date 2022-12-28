import React from 'react';

import JobTitle from './JobTitle.js';
import Filtering  from './components/Filtering.js';
import '../../styles/App.css';



import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const onSearchSubmit = event=>{
    event.preventDefault();
  };

  
  const jobData = [
    {id:1,title:"Data engineer",tags:['mid','python','AWS','GCP'],description:"Must have GCP certification"},
    {id:2,title:"Data scientist",tags:['mid','python','R'],description:"Must have GCP certification"},
    {id:3,title:"python developer",tags:['mid','python','docker'],description:"Must have GCP certification"},
    {id:4,title:"full-stack developer",tags:['mid','python','react'],description:"Must have GCP certification"}      
    ]

    const [jobInfo, setJobInfo] = React.useState(jobData);
        
    const jobComponents = jobInfo.map((item)=><JobTitle key={item.id} infoProp={item}/>)
      
    
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
                    <div className='col-sm-3'>
                      <Filtering/>
                    </div>

                    <div className='col-sm-6'>
                    {jobComponents}                    
                    </div>

                    <div className='col-sm-3'></div>
                </div>  
                       
              </div>
                
      //       

      // </div>
    );
  
}

export default App;
