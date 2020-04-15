import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Product = ({ product }) => {
  return (
  	<Grid item key={product.sku} xs={2} align="center" border={1}>
      <Box border={1} height="100%">
      	<Box >
      		<img src={"../data/products/" + product.sku.toString() + "_1.jpg"} height="50%" width="50%" alt={product.title}/>
      	</Box>  
      	<Box >
      	{product.title}
      	</Box>  
      </Box>
   </Grid>
   )
};

export default Product;