import React from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const ProductList = ({ products }) => {
  return (
  	<Box padding={10}>
    <Grid container spacing={3}>
    
      {products.map(product => <Product key={product.sku} product={product}/>)}
    
    </Grid>
    </Box>
    )
};

export default ProductList;