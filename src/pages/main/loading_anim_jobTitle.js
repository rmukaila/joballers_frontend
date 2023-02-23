import React, { useState } from "react"
import '../../styles/Job.css'


const Loading_anim_job_titles = (jobInfoProp)=> {
  
  

//   const [isOpen, setOpen] = React.useState(false);
  
  
//   const handleDropdown = () => {setOpen(!isOpen)}

  return(
  
    <div className="row">
        <div className='col-sm-12'>
          <button className="loading_anim_job_title loading">
            <div className="row">
                <div className='col-md-4'>
                  <p>{jobInfoProp.infoProp.title}</p>
                </div>

                <div className='col-md-8 d-flex flex-wrap'>
                  
                  {jobInfoProp.infoProp.tags.map((tag)=><label className="loading_anim_tag loading" key={jobInfoProp.infoProp.tags.indexOf(tag)}>{tag}</label>)}
                </div>
            </div>
          </button>
        </div>
      
    </div>
  
  );
}
export default Loading_anim_job_titles;