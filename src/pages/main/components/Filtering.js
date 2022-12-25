import React from "react";


const FiltersLabel = () =>{
    return(
        <label>Selected filters</label>
    );
}
const SalaryFilter = () =>{
    return(
        <select>
            <option value=''>
                Salary range here
            </option>
        </select>
    );
}
// const JobTitleFilter = () =>{}
const LocationFilter = () =>{
    return(
        <select>
            <option>
                All countries
            </option>
        </select>
    );
}

const Filtering = ()=>{

return(
<>
    <FiltersLabel/>
    <LocationFilter/>
    <SalaryFilter/>
</>

);


}

export default Filtering;