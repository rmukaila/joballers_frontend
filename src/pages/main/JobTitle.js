import React from "react"
import '../../styles/Job.css'


const JobTitle = ()=> {

  return(
  
    <div className="row">
        <div className='col-sm-12'>
          <button className=" jobTitle">
            <div className="row">
                <div className='col-md-4'>
                  <p>Job Tilte Here with</p>
                </div>

                <div className='col-md-8'>
                  <p>Job Tilte Here</p> 
                </div>
            </div>
          </button>
        </div>
    </div>
  
  );
}
export default JobTitle;