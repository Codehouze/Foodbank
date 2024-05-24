import React from 'react'
import Nav from '../SharedComponent/Nav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FoodCard from '../Food/FoodCard';
function Dashboard() {
    return (
        <>
        <Nav/>
        <CardMedia
          component="img"
          height="240"
          image="https://www.theafricancourier.de/wp-content/uploads/2019/09/Food-bank-660x330.jpg"
          alt="green iguana"
          marginButton="100px"
          sx={{marginButton:"100px", borderRadius:'10px', marginTop:'1px'}}
        />
    
      
      
    {/* </Card> */}
        <h2 style={{}}>Grains </h2>
<div className='row'>
<div className='col-lg-6 col-md- col-sx-4'><FoodCard /></div>
<div className='col-lg-6 col-md-6 col-sx-4'><FoodCard /></div>

</div>

        {/* three column with samples of the category of food... */}
        {/* when any of the card in a category is clicked you should see the food list of that category.  */}

        
        </>

    )
}

export default Dashboard
