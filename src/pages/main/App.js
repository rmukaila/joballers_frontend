import React, {useState, useEffect} from 'react';

import JobTitle from './JobTitle.js';
import Loading_anim_job_titles from'./loading_anim_jobTitle.js';
import Filtering  from './components/Filtering.js';
import '../../styles/App.css';



import 'bootstrap/dist/css/bootstrap.min.css';

 
  const App = ()=> {
    
    

  //Mock data. Move this to the assets folder.
  //Note: This data is used by the loading animation and thus should not be deleted
  const mock_jobData = [{id:1,title:"Data engineer",tags:['mid','python','AWS','GCP'],description:"Must have GCP certification"},
    {id:2,title:"Data scientist",tags:['mid','python','R'],description:"Must have GCP certification"},
    {id:3,title:"python developer",tags:['mid','python','docker'],description:"Must have GCP certification"},
    {id:4,title:"full-stack developer",tags:['mid','python','react'],description:"Must have GCP certification"},
          
    ]


    //States and variable declarations
    const [jobInfo, setJobInfo] = useState([]);    
    const [query, setQuery] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [orijinalData, setOrijinalData] = useState([])    
    const backend_url = process.env.REACT_APP_BACKEND_URL


    //Function declarations
    const handleOnInput = (e)=>{
      setQuery(e.target.value)
    }

    const onSearchSubmit = event=>{
      event.preventDefault();
      setJobInfo(search_data(orijinalData))
    }
    
    const get_jobs= async ()=>{
      var respns = await fetch(backend_url)
      var job_data = await respns.json()
      if (job_data){setLoaded(true)} else {setLoaded(false)}
      setJobInfo(job_data.data)
      setOrijinalData(job_data.data)
    }
    
    const search_data = (data)=>{
      return query.length>0? data.filter(
        (item)=>search_params.some((param)=>item[param].toString().toLowerCase().includes(query.toLowerCase()))
      
      ):data;
    }
    
    useEffect(()=> { 
      get_jobs()
    }, []);

    const search_params = Object.keys(Object.assign({}, ...jobInfo));//Dig deeper later
    const jobComponents =loaded? jobInfo.map((item)=><JobTitle key={item.id} infoProp={item}/>): mock_jobData.map((item)=><Loading_anim_job_titles key={item.id} infoProp={item}/>);
      
    
    return (
      
      // <div className='container'>
      //     
              <div className="App">
                
                <div className="App-header">
                  {/* <img src={logo} className="App-logo" alt="logo" /> */}
                  <h2>Welcome to Joballers, freely post or find your next job</h2>
                  <form onSubmit={onSearchSubmit}>
                    <input type='text' className='Search-bar' placeholder='Type job title, description or tag' onChange={handleOnInput}/>
                    <button type='submit' >Search</button>
                  </form>
                </div>
                <p className="App-intro">
                  Note: this is an ongoing project. eg: Filters are not active yet.
                  <br></br>
                  Note2: Database is hosted on a separate FREE server, loading may take approx 30 scnds for first time visitors.
                </p>

                <div className='row'>
                    <div className='col-sm-3'>
                      <Filtering/>
                    </div>

                    <div className='col-sm-6'>
                    
                    {jobComponents}
                      <div >
                        <button className='load-more'>Load more..</button>
                      </div>                    
                    </div>

                    <div className='col-sm-3'></div>
                </div>  
                       
              </div>
                
      //       

      // </div>
    );
  
}

export default App;
