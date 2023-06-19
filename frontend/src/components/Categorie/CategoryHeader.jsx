import { useEffect, useState } from "react";
import { Container,Row ,Col} from 'react-bootstrap'

import {  useDispatch, useSelector } from "react-redux";
import { getCategorys } from "../../redux/actions/AllCategorysAction";

const CategoryHeader = ({filterbyCategory}) => {

  const dispatch = useDispatch();
  const categorysData = useSelector((state) => state.categorys);
  const [cats, setCats] = useState(["all"]);
  useEffect(() => {
    dispatch(getCategorys());
  }, [dispatch]);
  
  useEffect(() => {
    var arr = cats;
    for(let i=0; i<categorysData.categorys.length;i++ ){
      arr.push(categorysData.categorys[i])
    }
    setCats(arr ?? []);
    // setCats("all", categorysData.categorys);
  }, [categorysData.categorys]);


//to filter by categorie

const onFilter=(cat)=>{
  filterbyCategory(cat)
}


    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div style={{marginTop:"30px", color:"#add3ff",fontSize:"30px"}}>choose a category: </div>
            {/* <div className="cat-text-header">All</div>
            <div className="cat-text-header">Pride</div>
            <div className="cat-text-header">Cloth</div>
            <div className="cat-text-header">Soap</div>
            <div className="cat-text-header">Wood</div>
            <div className="cat-text-header">Accessor</div>
            <div className="cat-text-header">Art</div> */}

            {/* <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >All</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Pride</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Cloth</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Soap</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Wood</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Accessor</button>
            <button className='btn mx-2' style={{border : "1px solid #b45b35" }} >Art</button>
 */}


            {

cats.length >=1 ? (

cats.map((cats)=>{

return (
  
<div>
{/* <button   onClick={()=>onFilter(cat)} className='btn mx-2' style={{border : "1px solid #b45b35" }} >{cat}</button> */}
<button onClick={()=>onFilter(cats)} className='btn mx-2' style={{border : "1px solid #add3ff" }} >{cats}</button>

</div>)
})

) : (<h1>errorpas categorie</h1>)
  
}


      
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader