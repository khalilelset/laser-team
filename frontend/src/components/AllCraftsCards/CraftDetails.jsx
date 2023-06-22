

import React, { useDeferredValue, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";
import { getCrafts } from "../../redux/actions/AllCraftsActions";
import { Col, Row } from "react-bootstrap";

import productImage from "../../assets/images/products/fe3.jpg";
import { Link } from "react-router-dom";

const CraftDetails = () => {
  const dispatch = useDispatch();
  const craftsData = useSelector((state) => state.crafts);
  const [crafts, setCrafts] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  useEffect(() => {
    setCrafts(craftsData.crafts ?? []);
  }, [craftsData.crafts]);



   useEffect(() => {
      const idURL = new URLSearchParams(window.location.search);
      setId(idURL.get("idd"));
       dispatch(getCrafts());
     }, [dispatch]);
     
     const [craft, setCraft] = useState({});
    useEffect(()=>{
      if(crafts.length > 0){
        for(let i=0; i<crafts.length; i++){
          if(crafts[i]._id === id){
            setCraft(crafts[i]);
            break;
          }
        }
      }
    },[crafts])
/////

    // useEffect(()=>{
    //   if(crafts.length>0){
    //       var arr = []
    //       for(let i=0;i<crafts.length;i++){
    //           if(crafts[i]._id === id){
    //               arr.push(crafts[i]);
    //           }
    //       }
    //       setCra(arr);
    //   }
    // },[crafts])

    // const [cra, setCra] = useState(crafts);
    // console.log(cra);
////./

  // const dispatch = useDispatch();
  // const craftsData = useSelector((state) => state.crafts);
  // const [crafts, setCrafts] = useState([]);
  // useEffect(() => {
  //   dispatch(getCrafts());
  // }, [dispatch]);

  // useEffect(() => {
  //   setCrafts(craftsData.crafts ?? []);
  // }, [craftsData.crafts]);

  // const craft = useSelector((state) => state.craft);
  // console.log(craft);

  return (


    
    <div>
    <Row className="justify-content-center">
        {/* <Col md="12" xs="12" sm="12" className="mt-4 "> */}
            <div className="card-detalis1 d-flex align-items-center ">
                <img
                    className="img-movie1 w-30"
                    src={productImage}
                    alt="ascad"
                    height="500px"
                    width="520px"
                    style={{height: '860px', width: '860px'}}
                    
                />
                {/* <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details1 border-bottom">
                    title:  {craft != {} &&  craft.craftTitle}
                    </p>
                    <p className="card-text-details1 border-bottom">
                       
                    </p>
                    <p className="card-text-details1 border-bottom">
                    
                    </p>
                    <p className="card-text-details1 border-bottom">
                        vote :{craft != {} && craft.craftDescription}
                    </p>
                </div> */}
            </div>
        {/* </Col> */}
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story1  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title1 border-bottom">details:</p>
                </div>
                <div className="text-end px-2">
                    {/* <p className="card-text-story1">{movie.overview}</p> */}
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 mb-4 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    Home page
                </button>
            </Link>
            {/* <a href={movie.homepage} > */}
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
                    watch film
                </button>
            {/* </a> */}
        </Col>
    </Row>
</div>



  )
}

export default CraftDetails