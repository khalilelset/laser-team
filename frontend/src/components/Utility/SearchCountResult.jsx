import React from 'react'

import sort from '../../assets/img/sort.png'
import UnopDropdown from 'unop-react-dropdown'
import { FormControl } from 'react-bootstrap'
const SearchCountResult = ({ title ,setSearch,filterByTitle}) => {
   
  const handleChange = (e) =>{
    setSearch(e.target.value)
    filterByTitle(e.target.value);
  }

    return (
        <div className="d-flex pt-3 px-2 search-box">
             {/* justify-content-between */}
            <div className="sub-tile" > <span style={{color:"#add3ff"}}>{title} </span> search value </div>
           
          <div className="d-flex">
          <form action="/action_page.php">
  

    <div class="input-group mb-3" style={{marginTop:"-15px", marginLeft: "20px"}}>
      <input type="text" class="form-control" placeholder="shearch..." name="email" onChange={handleChange} style={{border : "3px solid #add3ff" }} />
      
    </div>
    
  
  </form>

            

        
</div>

        </div>
    )
}

export default SearchCountResult
