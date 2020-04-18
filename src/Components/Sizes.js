import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Sizes = ({ product, selectedState}) => {

  const sizes = ['S', 'M', 'L', 'XL'];

  const updateCart = (product) => {
    var newCart = selectedState.selected;
    newCart.push(product);
    selectedState.setSelected(newCart);
  }

  return (
    <ButtonGroup >
      {sizes.map(size => <Button key={size} onClick={() => {updateCart(product)}}> {size} </Button>)}
    </ButtonGroup>
   )
};

export default Sizes;