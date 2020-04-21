import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Sizes = ({ product, selectedState, cartState}) => {


  const sizes = ['S', 'M', 'L', 'XL'];

  const updateCart = (product) => {

    cartState.setCart(true)

    var newCart = selectedState.selected.selectedItems;
    console.log(selectedState.selected.selectedItems);

    newCart.push(product);

    selectedState.setSelected({selectedItems: newCart});
  }

  return (
    <ButtonGroup fullWidth={true} >
      {sizes.map(size => <Button key={size} onClick={() => {updateCart(product)}}> {size} </Button>)}
    </ButtonGroup>
   )
};

export default Sizes;