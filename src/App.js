import React, { useEffect, useState } from 'react';
import dataJSON from "./products.json";
import inventoryJSON from "./inventory.json";

import firebase from 'firebase/app';
import 'firebase/database';

import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';

const firebaseConfig = {
  apiKey: "AIzaSyB6QGVdcfJowjDNyo6EfMpGnIinu9nQv40",
  authDomain: "new-shopping-cart-4563a.firebaseapp.com",
  databaseURL: "https://new-shopping-cart-4563a.firebaseio.com",
  projectId: "new-shopping-cart-4563a",
  storageBucket: "new-shopping-cart-4563a.appspot.com",
  messagingSenderId: "928605069032",
  appId: "1:928605069032:web:df935ef0a05436dd28335d",
  measurementId: "G-XGE4X92EMQ"
};

firebase.initializeApp(firebaseConfig);



const App = () => {
  const [data, setData] = useState({products: []});
  const [cart, setCart] = useState(false);
  const [selected, setSelected] = useState({selectedItems: []});
  const [inventory, setInventory] = useState({items: {}});

  useEffect(() => {
    setData({products: Object.values(dataJSON)});
    setInventory({items: inventoryJSON});
  }, []);

  const toggleCart = () => {

    if(cart){
      setCart(false);
    }else{
      setCart(true);
    }
  }

  return (
    <div>
      <Box position="absolute" top={0} right={0}>
        <Button onClick={() => {toggleCart()}}><Icon>shopping_cart</Icon></Button>
      </Box>
      <Drawer anchor = "right" open={cart} onClose={() => {toggleCart()}}>
        <Cart selectedState ={ {selected, setSelected} } cartState = { {cart, setCart} } inventoryState={ {inventory, setInventory} }/>
      </Drawer>
      <ProductList products={data.products} selectedState={ {selected, setSelected} } cartState={ {cart, setCart} } inventoryState={ {inventory, setInventory} }/>
    </div>
    
  );
};

export default App;