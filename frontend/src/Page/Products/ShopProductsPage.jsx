

import { Col, Container, Row } from "react-bootstrap";

import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utility/Pagination";
import SideFilter from "../../components/Utility/SideFilter";
import SearchCountResult from "../../components/Utility/SearchCountResult";
import CategoryHeader from "../../components/Categorie/CategoryHeader";
import { getProducts } from "../../redux/actions/AllProductsActions";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
// import { getCategorys } from "../../redux/actions/AllCategorysAction";



const ShopProductsPage = () => {


  const dispatch = useDispatch();
  const itemsPerPage = 12;
  const productsData = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  useEffect(() => {
    setProducts(productsData.products ?? []);
  }, [productsData.products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const [pro, setPro] = useState(products);
  const [searchVal, setSearchVal] = useState('');
  // const [category, setCategory] = useState('all');
  
  // useEffect(() => {
  //   setPro(products);
  // }, []);
// filter by category

useEffect(()=>{
  setPro(productsData.products);
},[productsData])

  const filterbyCategory=(cat)=>{
    if(cat === "all" || cat === ""){
      setPro(products)
    
    }
    else{ 
    
    const newArr=products.filter((item)=> item.productCategory === cat)
    setPro(newArr)
    }
    }
// end filterbyCategory
//filter by searche
 const filterByTitle=(tit)=>{
   if (tit !=="")
     {
     const newArr=products.filter((item)=> item.productTitle.includes(tit))
     setPro(newArr)
    }
     else{setPro(products)}
    }

    
    // useEffect((searchVal) => {
    //    if (searchVal !=="")
    //  {
    //  const newArr=products.filter((item)=> item.productTitle === searchVal)
    //  setPro(newArr)
    // }
    //  else{setPro(products)}
    // }, [searchVal]);
  


const [itemOffset, setItemOffset] = useState(0);
const endOffset = itemOffset + itemsPerPage;
const currentItems = pro.slice(itemOffset, endOffset);
const pageCount = Math.ceil(pro.length / itemsPerPage);
const handlePageClick = (event) => {
const newOffset = (event.selected * itemsPerPage) % pro.length;
setItemOffset(newOffset);
// end filterbysearch   
};

  return (
    <div style={{ minHeight: "670px" }}>


      <CategoryHeader filterbyCategory={filterbyCategory}/>
     


      <Container>


        <SearchCountResult title={`${pro.length}`} setSearch={setSearchVal} filterByTitle={filterByTitle}/>




        <Row className="d-flex flex-row">

       

                                       {/* justify-content-between */}
            <Row className="my-2 d-flex ">
   
        {currentItems.map((product) => (
          // <ProductCard product={product} />
          <Card product={product} />
        ))}
      </Row>



          {/* </Col> */}
        </Row>
        {/* <Pagination /> */}

{pageCount > 0 && <div style={{marginTop:'20px',marginBottom:'20px'}}><ReactPaginate
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
</div>
}
        
      </Container>
    </div>
  );
};

export default ShopProductsPage;
