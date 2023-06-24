import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,CardActions } from '@mui/material';
import {Row,Col}from 'reactstrap'
import w from "./../../images/Unknown_person.jpg"

export default function ProductPortfolio({portfolio}) {
  
  return (
    <div>
      
    
 <Row xs={1} sm={2} md={3} lg={3} xl={3} gap={2}>
 {portfolio.product.map((product, index) => (
             
<Col key={index}style={{width:"400px"}}>
 <Card sx={{ maxWidth: 500  , marginTop: 10}} >
 
<CardActionArea>
  <CardMedia
    component="img"
    height="350px"
    width="400px"
    image={require(`./../../assets/image/product/productc/${product.mainProductImage}`)}
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div"style={{textAlign:"left"}}>
    {product.productTitle}
    </Typography>
    <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}}>
     {product.productDescription}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <p size="small" color="primary">
  {product.price}$
  </p>
</CardActions>
</Card>
   </Col>   
  
 ))}
 </Row>

 </div>
  )
}
