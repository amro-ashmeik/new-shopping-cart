import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Sizes from './Sizes';
import { spacing } from '@material-ui/system';
import { positions } from '@material-ui/system';
import { typography } from '@material-ui/system';
import { flexbox, display } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import { sizing } from '@material-ui/system';

const Product = ({ product, selectedState, cartState }) => {
  return (
  	<Grid item key={product.sku} xs={2} border={1}>
      <Box display="flex" flexDirection="column" border={1} height="100%" justifyContent="space-between">
      	<Box pt={2} display="flex" justifyContent="center">
      		<img src={"../data/products/" + product.sku.toString() + "_1.jpg"} height="70%" width="70%" alt={product.title}/>
      	</Box>  
      	<Box fontWeight="500" align="center">
      		{product.title}
      	</Box>
      	<Box fontSize='80%' fontStyle="italic" fontWeight="light" align="center">
      	{product.description}
      	</Box>
      	<Box mt={3} align="center">
      	{product.currencyFormat + product.price.toString()}
      	</Box>
      	<Box mt={3} mb={2} mx={1} align="center">
      		<Sizes product={product} selectedState={ selectedState } cartState={ cartState }/>
      	</Box>
      </Box>
   </Grid>
   )
};

export default Product;