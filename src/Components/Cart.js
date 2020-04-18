import React from 'react';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Cart = ({ items }) => {

	var total = 0;

	for(var i = 0; i < items.length; i++){
		total += items[i].price;
	}

  return (
  	<Box padding={10}>
    	<Grid container direction="column">

      		{items.map(item => <CartItem key={item.sku} item={item}/>)}

    	</Grid>

    	<Box>
    		TOTAL COST: {total}
    	</Box>
    </Box>
    )
};

export default Cart;