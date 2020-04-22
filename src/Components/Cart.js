import React from 'react';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Cart = ({ selectedState, cartState, inventoryState }) => {

	var total = 0;

	for(var i = 0; i < selectedState.selected.selectedItems.length; i++){
		total += selectedState.selected.selectedItems[i].price;
	}
	
  return (
  	<Box padding={10}>
    	<Grid container direction="column">

      		{selectedState.selected.selectedItems.map((item,index) => <CartItem key={index} item={item} selectedState={ selectedState } cartState={ cartState } inventoryState = { inventoryState }/>)}

    	</Grid>

    	<Box>
    		TOTAL COST: {total}
    	</Box>
    </Box>
    )
};

export default Cart;