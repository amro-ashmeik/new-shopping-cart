import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import { positions } from '@material-ui/system';
import { typography } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const CartItem = ({ item, selectedState, cartState }) => {

   const updateCart = (product) => {

    var newCart = selectedState.selected.selectedItems;

    for(var i = 0; i < newCart.length; i++){
      if(newCart[i].sku == product.sku){
         newCart.splice(i,1);
         break;
      }
    }

    selectedState.setSelected({selectedItems: newCart});
  };

  return (
  	<Grid item key={item.sku} xs={2} border={1} height="60%">
      <Box border={1} align="center" height="50%" width="500%">
        <Button onClick = {()=> {updateCart(item)}}> <Icon>close</Icon> </Button>
      	<Box pt={2}>
      		<img src={"../data/products/" + item.sku.toString() + "_1.jpg"} height="50%" width="75%" alt={item.title}/>
      	</Box>  
      	<Box fontWeight="500" fontSize="50%">
      	{item.title}
      	</Box>
      	<Box fontSize='50%' fontStyle="italic" fontWeight="light">
      	{item.description}
      	</Box>
      	<Box >
      	{item.currencyFormat + item.price.toString()}
      	</Box>
      </Box>
   </Grid>
   )
};

export default CartItem;