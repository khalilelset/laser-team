import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = ({filterbyCategory,allCategory}) => {

//to filter by categorie
const onFilter=(cat)=>{
  filterbyCategory(cat)
}

    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
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

allCategory.length >=1 ? (

allCategory.map((cat)=>{

return (
  
<div>
{/* <button   onClick={()=>onFilter(cat)} className='btn mx-2' style={{border : "1px solid #b45b35" }} >{cat}</button> */}
<button onClick={()=>onFilter(cat)} className='btn mx-2' style={{border : "1px solid #b45b35" }} >{cat}</button>

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