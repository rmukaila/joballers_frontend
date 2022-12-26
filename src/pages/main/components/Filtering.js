import React from "react";
import '../../../styles/Filtering.css';


const FiltersLabel = () =>{
    return(
        <label className="Filtering-label">Selected filters</label>
    );
}

const SalaryFilter = () =>{
    return(
        <select className="Filter-component">
            <option value=''>
                Salary range here
            </option>
        </select>
    );
}


const LocationFilter = () =>{
    return(
        <select className="Filter-component">
            <option>
                All countries
            </option>
        </select>
    );
}



const Filtering = ()=>{

return(
<div className="Filtering-container">
    <FiltersLabel/>
    <LocationFilter/>
    <SalaryFilter/>
</div>

);


}

export default Filtering;