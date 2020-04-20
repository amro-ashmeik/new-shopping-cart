import React from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const ProductList = ({ products, selectedState, cartState }) => {
  return (
  	<Box padding={10}>
    <Grid container spacing={3}>
    
      {products.map(product => <Product key={product.sku} product={product} selectedState={ selectedState } cartState = { cartState }/>)}
    
    </Grid>
    </Box>
    )
};

export default ProductList;