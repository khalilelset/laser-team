import React from 'react'

import sort from '../../assets/img/sort.png'
import UnopDropdown from 'unop-react-dropdown'
import { FormControl } from 'react-bootstrap'
const SearchCountResult = ({ title }) => {
    const handler = () => {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2 search-box">
             {/* justify-content-between */}
            <div className="sub-tile">{title}</div>
            {/* <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                           sort by  </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">best seller</div>
                        <div onClick={} className="border-bottom card-filter-item">best seller</div>
                        <div className="border-bottom card-filter-item">The highest rated</div>
                        <div className="border-bottom card-filter-item">
                        $ from low to high
                        </div>
                        <div className=" card-filter-item">$ from high to low</div>
                    </div>
                </UnopDropdown>
            </div> */}
          <div className="d-flex">
          <form action="/action_page.php">
    {/* <div class="input-group mb-3">
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="Username" name="usrname"/>
    </div> */}

    <div class="input-group mb-3" style={{marginTop:"-25px"}}>
      <input type="text" class="form-control" placeholder="shearch..." name="email"/>
      <span class="input-group-text btkk" style={{cursor:'pointer'}} >seharch</span>
    </div>
    
  
  </form>

            

        
</div>

        </div>
    )
}

export default SearchCountResult
