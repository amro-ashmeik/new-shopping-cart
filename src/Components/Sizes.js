import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Sizes = ({ product }) => {

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <ButtonGroup >
      {sizes.map(size => <Button key={size}> {size} </Button>)}
    </ButtonGroup>
   )
};

export default Sizes;