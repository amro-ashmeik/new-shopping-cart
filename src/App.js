import React, { useEffect, useState } from 'react';
import dataJSON from "./products.json";

import firebase from 'firebase/app';
import 'firebase/database';

import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';

import { Message } from 'rbx';

import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
const db = firebase.database().ref();

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Welcome = ({ user }) => (
  <Message color="info">
    <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </Message.Header>
  </Message>
);

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

const Banner = ({ user }) => (
  <React.Fragment>
    { user ? <Welcome user={ user } /> : <SignIn /> }
  </React.Fragment>
);


const App = () => {
  const [data, setData] = useState({products: []});
  const [cart, setCart] = useState(false);
  const [selected, setSelected] = useState({selectedItems: []});
  const [inventory, setInventory] = useState({items: {}});
  const [user, setUser] = useState(null);

  useEffect(() => {
    setData({products: Object.values(dataJSON)});
    const handleData = snap => {

      if(snap.val()){
        // if(user != null){
        //   const userUID = user.uid;
        //   if(userUID in snap.val().carts){
        //     console.log("concat");
        //     setSelected({selectedItems: selected.selectedItems.concat(snap.val().carts[userUID])});
        //   }else{
        //     setSelected({selectedItems: selected.selectedItems});
        //   }
        // }
        setInventory({items: snap.val()});
      }
    }
    firebase.database().ref("inventory").on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
    
  }, []);

  useEffect(() => {
    if(user != null){
      firebase.database().ref("carts").once("value").then(snap=> {
        if(user.UID in snap.val()){
          const newCart = selected.selectedItems.concat(snap.val());
          console.log(newCart);
          setSelected({selectedItems: newCart});
          firebase.database().ref("carts/" + user.uid).set(newCart);
        }else{
          firebase.database().ref("carts/" + user.uid).set(selected.selectedItems);
        }
      })
    }else{
      setSelected({selectedItems: []});
    }
  }, [user]);

  useEffect(() => {
    if(user != null){
        firebase.database().ref("carts/" + user.uid).set(selected.selectedItems);
    }

  }, [selected]);

  useEffect(() => {
    if(Object.keys(inventory.items).length != 0){
      firebase.database().ref("inventory").set(inventory.items);
    }
  }, [inventory]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
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
      <Banner user={ user } />
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