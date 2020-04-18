import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Sizes from './Sizes';
import { spacing } from '@material-ui/system';
import { positions } from '@material-ui/system';
import { typography } from '@material-ui/system';

const Product = ({ product, selectedState }) => {
  return (
  	<Grid item key={product.sku} xs={2} border={1}>
      <Box border={1} align="center" height="100%" position="relative" >
      	<Box pt={2}>
      		<img src={"../data/products/" + product.sku.toString() + "_1.jpg"} height="70%" width="70%" alt={product.title}/>
      	</Box>  
      	<Box mt={2} mb={2} fontWeight="500">
      	{product.title}
      	</Box>
      	<Box mb={10} fontSize='80%' fontStyle="italic" fontWeight="light">
      	{product.description}
      	</Box>
      	<Box position='absolute' bottom={50} ml={10}>
      	{product.currencyFormat + product.price.toString()}
      	</Box>
      	<Box position='absolute' bottom={5} ml={1.3}>
      		<Sizes product={product} selectedState={ selectedState }/>
      	</Box>
      </Box>
   </Grid>
   )
};

export default Product;