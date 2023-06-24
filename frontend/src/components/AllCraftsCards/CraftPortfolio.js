import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,CardActions } from '@mui/material';
import {Row,Col}from 'reactstrap'
import { Link } from 'react-router-dom';

export default function CraftPortfolio({portfolio}) {
  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={3} xl={3} gap={2}>
{portfolio.craft.map((craft, index) => (
  <Col key={index}style={{width:"400px"}}> 
  <Card sx={{ maxWidth: 500 , marginTop: 10}}>
  <Link to={`/AllCraftsdetails?idd=${craft._id}`}>
<CardActionArea>
  <CardMedia
    component="img"
    height="350px"
     width="400px"
    image={require(`./../../assets/image/craft/craftc/${craft.mainCraftImage}`)}
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {craft.craftTitle}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    {craft.craftDescription}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
</CardActions>
</Link>
</Card>
     </Col>             
 ))}
 </Row>
    </div>
  )
}
