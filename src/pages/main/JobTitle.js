import React, { useState } from "react"
import '../../styles/Job.css'


const JobTitle = (jobInfoProp)=> {
  
  

  const [isOpen, setOpen] = React.useState(false);
  
  
  const handleDropdown = () => {setOpen(!isOpen)}

  return(
  
    <div className="row">
        <div className='col-sm-12'>
          <button className=" jobTitle" onClick={handleDropdown} >
            <div className="row">
                <div className='col-md-4'>
                  <p>{jobInfoProp.infoProp.title}</p>
                </div>

                <div className='col-md-8 d-flex flex-wrap'>
                  
                  {/* <p>Job Tilte Here</p>  */}
                  {jobInfoProp.infoProp.tags.map((tag)=><button className="tag" key={jobInfoProp.infoProp.tags.indexOf(tag)}>{tag}</button>)}
                </div>
            </div>
          </button>
        </div>

        {isOpen?
        <div>
          <textarea className='col-sm-12 dropDown'  readOnly
          value={jobInfoProp.infoProp.description}>
            
          </textarea>
        </div>
         :null
        }
    </div>
  
  );
}
export default JobTitle;