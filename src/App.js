import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';

import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

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
  const [data, setData] = useState({});
  const products = Object.values(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  //console.log(products.map(product => console.log("../data/products/" + product.sku.toString() + "_1.jpg")))

  return (
    <Box padding={10}>
    <Grid container spacing={3}>
    
      {products.map(product => <Grid item key={product.sku} xs={2} align="center" border={1}>
                                  <Box border={1} height="100%">
                                  <Box >
                                  <img src={"../data/products/" + product.sku.toString() + "_1.jpg"} height="50%" width="50%"/>
                                  </Box>  
                                  <Box >
                                  {product.title}
                                  </Box>  
                                  </Box>
                               </Grid>)}
    
    </Grid>
    </Box>
  );
};

export default App;