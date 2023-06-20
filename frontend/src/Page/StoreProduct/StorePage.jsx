import React from 'react'
import './StorePage.css'
import Slider from '../../components/Utility/Slider'
import HomeCategory from '../../components/StoreProduct/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/Utility/DiscountSection'
import { Link } from 'react-router-dom'

const StorePage = () => {
  return (
    <div className='font' style={{minHeight:'670px'}}>
        
    <Slider/>
    <DiscountSection text="Select a category to views its products"/>
    <HomeCategory/>
    <DiscountSection text="Click more to view our products"/>
    <CardProductsContainer title=" Product"/>
  <div className='shopping-now ' style={{display:'flex', justifyContent:'center'}}><Link to="/products">more</Link> </div> 
    

     
     
   
  {/*  <CardProductsContainer title=" best rated" btntitle="more" pathText="/products"/>
    <BrandFeatured title=" best mark" btntitle="more"/> */}
  
    


</div>
  )
}

export default StorePage
