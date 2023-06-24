import React, { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/AllProductsActions";
import { getCrafts } from "../../redux/actions/AllCraftsActions";
import { Col, Row } from "react-bootstrap";
import CraftOwnerPortfolio from "./CraftOwnerPortfolio";
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const CraftDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idd = searchParams.get('idd');
  const dispatch = useDispatch();
  const craftsData = useSelector((state) => state.crafts);
  const [crafts, setCrafts] = useState([]);
  const [id, setId] = useState('');
  console.log(idd)
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

  return (

<>
{craft.mainCraftImage ? (

    <div>
    <Row className="justify-content-center">
            <div className="card-detalis1 d-flex align-items-center ">
            <Carousel>

     {craft.craftImage.map((img, index) => (
          <Carousel.Item key={index}>
           
            <img
              className="d-block w-100"
              src={require(`./../../assets/image/craft/craftd/${img}`)}
              alt={`Slide ${index + 1}`}
              isActive={false}
            />
       </Carousel.Item>
       ))}
      </Carousel>
            </div>
      
    </Row>

    <Row className="justify-content-center" style={{marginTop:"80px"}}>
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story1  d-flex flex-column align-items-start">
                <div className="text-end p-4 " style={{fontSize:"4000px"}}>
                <p className="card-text-title1 border-bottom" style={{marginBottom:"20px"}}>title:      {craft != {} &&  craft.craftTitle}</p>
                    <p className="card-text-title2 border-bottom">details:         {craft != {} && craft.craftDescription}</p>
                </div>
                <div className="text-end px-2">
                  
                </div>
            </div>
        </Col>
    </Row>

    <CraftOwnerPortfolio idd={idd}/>
</div>
):( <div className="loading-container">
<div className="loading-spinner"></div>
<p>Loading...</p>
</div>)}

</>
  )
}

export default CraftDetails
