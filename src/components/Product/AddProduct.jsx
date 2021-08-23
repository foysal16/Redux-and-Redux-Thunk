import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import Icon from "@material-ui/core/Icon";

import { Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  filed: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const classes = useStyles();

  const newProduct = (p, key) => {
    setProduct({ ...product, [key]: p.target.value });
  };

  const newProductAdd = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      })
      .then((response) => {
        console.log(response, "============res");
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          variant="h2"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          ADD PRODUCT
        </Typography>

        <form noValidate autoComplete="off">
          <TextField
            className={classes.filed}
            value={product.title}
            onChange={(p) => newProduct(p, "title")}
            label="Product Name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.price}
            onChange={(p) => newProduct(p, "price")}
            label="Product Price"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.description}
            onChange={(p) => newProduct(p, "description")}
            label="Product Description"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            multiline
            rows={4}
          />

          <TextField
            className={classes.filed}
            value={product.category}
            onChange={(p) => newProduct(p, "category")}
            label="Product Category"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.image}
            onChange={(p) => newProduct(p, "image")}
            label="Product image"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <Button
            className={classes.filed}
            variant="contained"
            color="secondary"
            onClick={newProductAdd()}
            fullWidth
            startIcon={<HomeIcon />}
          >
            ADD PRODUCT
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
