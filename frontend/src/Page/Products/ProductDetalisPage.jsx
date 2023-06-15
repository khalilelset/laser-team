import React from 'react'
import { Container } from 'react-bootstrap'

// import CardProductsContainer from '../../Components/Products/CardProductsContainer'
// import ProductDetalis from '../../Components/Products/ProductDetalis'
// import RateContainer from '../../Components/Rate/RateContainer'
import ProductDetalis from '../../components/Products/ProductDetalis'
import RateBax from '../../components/Products/RateBax'
import CardProductsContainer from '../../components/Products/CardProductsContainer'


const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
           
            <Container>
                <ProductDetalis />
                <RateBax/>
                <CardProductsContainer title="Products You May Like " />
                
            </Container>
        </div>
    )
}

export default ProductDetalisPage