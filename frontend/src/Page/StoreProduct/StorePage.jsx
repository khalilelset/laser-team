import React from 'react'
import './StorePage.css'
import Slider from '../../components/Utility/Slider'
import HomeCategory from '../../components/StoreProduct/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'

const StorePage = () => {
  return (
    <div className='font' style={{minHeight:'670px'}}>
        
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title=" Product" btntitle="more" pathText="/products"/>

    {/* <DiscountSection/>
    <CardProductsContainer title=" best rated" btntitle="more" pathText="/products"/>
    <BrandFeatured title=" best mark" btntitle="more"/> */}
  
    


</div>
  )
}

export default StorePage
