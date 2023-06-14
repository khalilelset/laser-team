import React from 'react'
import labtop from '../../assets/img/labtop.png'
import cat2 from '../../assets/img/cat2.png'
import clothe from '../../assets/img/clothe.png'
import pic from '../../assets/img/pic.png'
import { Container, Row } from 'react-bootstrap'
import SubTitre from '../Utility/SubTitre'
import CategoryCard from '../Categorie/CategoryCard'
const HomeCategory = () => {
  return (
    <Container>
    <SubTitre title="category" btntitle="more" pathText="/allcategory"/>
<Row className='my-2 d-flex justify-content-between'>
     <CategoryCard background="#F4DBA4" title="honey" img={labtop}/>
     <CategoryCard background="#F4D004" title="honey" img={cat2}/>
     <CategoryCard background="#F4DBA4" title="honey" img={clothe}/>
     <CategoryCard background="#F08BA4" title="honey" img={pic}/>
     <CategoryCard background="#F4DBA4" title="honey" img={clothe}/>
     <CategoryCard background="#F4DB04" title="honey" img={cat2}/>
     </Row>
    </Container>
  )
}

export default HomeCategory
