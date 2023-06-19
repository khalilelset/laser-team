import { Col, Container, Row } from "react-bootstrap";

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProducts } from "../../redux/actions/AllProductsActions";
import ReactPaginate from "react-paginate";
import Card from "../../components/Card/Card";
import SearchCountResult from "../../components/Utility/SearchCountResult";

const CatPage = () => {
// const {category} =  useParams();
//  function MonComposant({title}) {
//      const productsData = useSelector(state => state.products.filter(product => product.category === productCategory));

    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products);
    //  const productsData = useSelector(state => state.products.filter(product => product.productCategory === title));
     const [products, setProducts] = useState([]);
     const [category, setCategory] = useState('');
     const itemsPerPage = 4;
     const [itemOffset, setItemOffset] = useState(0);

     useEffect(() => {
        const idURL = new URLSearchParams(window.location.search);
        setCategory(idURL.get("category"));
        
         dispatch(getProducts());
       }, [dispatch]);

       useEffect(() => {
         setProducts(productsData.products ?? []);
      }, [productsData.products]);
//kermel bas fut ma te5edne 3a e5er el safha
      useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

      useEffect(()=>{
        if(products.length>0 && category.length>0){
            var arr = []
            for(let i=0;i<products.length;i++){
                if(products[i].productCategory === category){
                    arr.push(products[i]);
                }
            }
            setPro(arr);
        }
      },[category,products])

      const [pro, setPro] = useState(products);
   const [searchVal, setSearchVal] = useState('');

//   useEffect(()=>{
//     setPro(productsData.products);
//   },[productsData])
const filterByTitle=(tit)=>{
    if (tit !=="")
      {
      const newArr=products.filter((item)=> item.productTitle.includes(tit))
      setPro(newArr)
     }
      else{setPro(products)}
     }

  //pag
 
const endOffset = itemOffset + itemsPerPage;
const currentItems = pro.slice(itemOffset, endOffset);
const pageCount = Math.ceil(pro.length / itemsPerPage);
const handlePageClick = (event) => {
const newOffset = (event.selected * itemsPerPage) % pro.length;
setItemOffset(newOffset);
};




  return (
    <div style={{ minHeight: "670px" }}>
   
    <Container>
<div style={{marginTop:"30px"}} className="d-flex justify-content-between ">
       <SearchCountResult title={`${pro.length}`} setSearch={setSearchVal} filterByTitle={filterByTitle}/> 
       <span className="catTitle">{category}</span>
</div>
      <Row className="d-flex flex-row">

                                     {/* justify-content-between */}
          <Row className="my-2 d-flex ">
 
      {currentItems.map((product) => (
        // <ProductCard product={product} />
        <Card product={product} />
      ))}
    </Row>

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
  </div>
  )
}

export default CatPage
