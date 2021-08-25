import React from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

import { setProductListToStore } from "../../store/action/productListAction";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      textAlign: "center",
    },
  })
);

const ProductList = () => {
  const { productList } = useSelector((store) => store.listStore);
  const dispatch = useDispatch();
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProductListToStore(response.data));
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  }, []);

  const seeDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  console.log(seeDetails, "============seeDetails");
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid container item md={7}>
        <Grid item md={12}>
          <h1 className="text-center text-uppercase">Prodcut List</h1>
        </Grid>

        {productList.map((product, index) => (
          <Grid item md={3}>
            <Card>
              <CardActionArea
                className={classes.paper}
                key={index}
                onClick={() => seeDetails(product.id)}
              >
                <CardMedia>
                  <img src={product.image} style={{ width: "250px" }} alt="" />
                </CardMedia>
                <CardContent>
                  <Typography>{product.title}</Typography>
                  <Typography>{product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => seeDetails(product.id)}
                    variant="contained"
                    color="primary"
                    justifyContent="center"
                  >
                    Prodcut Details
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductList;
