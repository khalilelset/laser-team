import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCrafts } from "../../redux/actions/AllCraftsActions";
import CraftCard from "../Card/CraftCard";
import './AllCraftsCards.css'
import { Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const AllCraftsCards = () => {
  const dispatch = useDispatch();
  const craftsData = useSelector((state) => state.crafts);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    dispatch(getCrafts());
  }, [dispatch]);

  useEffect(() => {
    setCrafts(craftsData.crafts ?? []);
  }, [craftsData.crafts]);


  
  const itemsPerPage = 16;
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const endOffset = itemOffset + itemsPerPage;
const currentItems = crafts.slice(itemOffset, endOffset);
const pageCount = Math.ceil(crafts.length / itemsPerPage);
const handlePageClick = (event) => {
const newOffset = (event.selected * itemsPerPage) % crafts.length;
setItemOffset(newOffset);
};



  return (
    // <div className="conatiner">
    //   <div className="row m-3 mt-3">
    //     <h1 className="text-center">All Crafts</h1>
    //     {crafts.map((craft) => (
    //       <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
    //         <CraftCard craft={craft} />
    //       </div>
    //     ))}
    //   </div>
    // </div>

<Container>

<Row className="my-2 d-flex justify-content-between" md="1" xs="1" sm="1">


        {crafts.length >=1 ? (currentItems.map((craft)=>{

return(<CraftCard craft={craft}/>)

        })):<h2>no data broo..</h2>}
        
   
    {/* {crafts.length >=1 ? (<PaginationBar getPage={getPage} pageCount={pageCount} />) : null} */}
    
      </Row>
      {pageCount > 0 && <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="prev"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
}
      </Container>
  );
};

export default AllCraftsCards;
