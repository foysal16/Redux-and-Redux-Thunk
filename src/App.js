import React from 'react';
import ProductList from './components/Product/ProductList'
import ProductDetails from './components/Product/productDetails'
import AddProduct from './components/Product/AddProduct';
import UpdateProduct from './components/Product/UpdateProduct';

import { Grid } from "@material-ui/core";



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";


import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Urbanist',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700

  }
})

const App =()=> {

const [userList, setUserList] = useState([])


const addUser = (userData) =>{
  setUserList([...userList,userData]);
}

useEffect(()=>{
  return () =>{

  }
},[userList]);

return (

  <ThemeProvider theme={theme}> 
    <Router>
      <Navbar />
      <Grid container justifyContent={'center'}>
        <Switch>
            <Route exact path="/">
              <ProductList userList={userList} />
            </Route>

            <Route path="/product-details/:id">
              <ProductDetails userList={userList} />
            </Route>

            <Route exact path="/addproduct">
              <AddProduct />
            </Route>

            <Route exact path="/Update-product/:id">
              <UpdateProduct />
            </Route>
            <Route path="*"><h1>404</h1></Route>
        </Switch>
      </Grid>
      
    </Router>
    <Footer />
   </ThemeProvider>
  );
}

export default App;