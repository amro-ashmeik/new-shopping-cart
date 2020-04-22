import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Sizes = ({ product, selectedState, cartState, inventoryState}) => {


  const sizes = ['S', 'M', 'L', 'XL'];

  const updateCart = (item,size) => {

    cartState.setCart(true)

    var newCart = selectedState.selected.selectedItems;
    var newInventory = inventoryState.inventory.items;
    var newProduct = { ...item };

    newProduct.size = size;

    newCart.push(newProduct);

    const prodSKU = item.sku.toString();

    newInventory[prodSKU][size] -= 1;

    inventoryState.setInventory({items: newInventory})
    selectedState.setSelected({selectedItems: newCart});
  }

  const sizeAvailable = (item, size) => {

    const available = inventoryState.inventory.items;

    if(available[item.sku.toString()][size] > 0){
      return true;
    }else{
      return false;
    }
  }

  return (
    <ButtonGroup fullWidth={true}>
      {
        sizes.map((size, index) => 
          <Button key={index} disabled={!sizeAvailable(product, size)} onClick={() => {updateCart(product, size)}}> {size} </Button>)

      }
    </ButtonGroup>
   )
};

export default Sizes;