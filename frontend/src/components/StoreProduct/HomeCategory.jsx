
import labtop from '../../assets/img/labtop.png'
import cat2 from '../../assets/img/cat2.png'
import clothe from '../../assets/img/clothe.png'
import pic from '../../assets/img/pic.png'
import c1 from '../../assets/img/C1pride-removebg-preview.png'
import c2 from '../../assets/img/C2cloth-removebg-preview.png'
import c3 from '../../assets/img/C3soap-removebg-preview.png'
import c4 from '../../assets/img/C4wood-removebg-preview.png'
import c5 from '../../assets/img/c57.png'
import c6 from '../../assets/img/C6Art-removebg-preview.png'
import { Container, Row } from 'react-bootstrap'
import SubTitre from '../Utility/SubTitre'
import CategoryCard from '../Categorie/CategoryCard'

import { useEffect, useState, React } from "react";


import {  useDispatch, useSelector } from "react-redux";
import { getCategorys } from "../../redux/actions/AllCategorysAction";
import { Link } from 'react-router-dom'

const HomeCategory = () => {

//   const dispatch = useDispatch();
//   const categorysData = useSelector((state) => state.categorys);
//   const [cats, setCats] = useState([]);
 
//   useEffect(() => {
//     dispatch(getCategorys());
//   }, [dispatch]);
  
//   useEffect(() => {
//     var arr = cats;
//     for(let i=0; i<categorysData.categorys.length;i++ ){
//       arr.push(categorysData.categorys[i])
//     }
//     setCats(arr ?? []);
    
//   }, [categorysData.categorys]);

//  const [cati, setCati] = useState([cats]);
//  useEffect(()=>{
//   setCati(categorysData.categorys);
// },[cats])

//   console.log(cats)

// const cati = ["KH","kh","KH","kh","KH","kh"];


  return (



    
    <Container style={{marginBottom:"50px"}}>
    <SubTitre title="category" />
<Row className='my-2 d-flex justify-content-between'>
{/* {cats.map((cat) => ( <CategoryCard background="#F4DB04" title={cat} img={cat2}/>))} */}
    
  <CategoryCard background="#ffbf77" title="Pride" img={c1}/>
<CategoryCard background="#ffe4c6" title="Cloth" img={c2}/>
     <CategoryCard background="#ffe2fa" title="Soap" img={c3}/>
     <CategoryCard background="#794100" title="Wood" img={c4}/>
     <CategoryCard background="#00b3ff" title="Accessory" img={c5}/>
     <CategoryCard background="#cfffaa" title="Art" img={c6}/>
     
     
 {/* console.log(cat)
    console.log(cats) */}

   


     </Row>
    </Container>
  )
}

export default HomeCategory
