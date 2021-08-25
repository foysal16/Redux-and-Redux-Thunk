import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { setProductEditToStore } from "../../store/action/productEditAction";

import { setProductListToStore } from "../../store/action/productListAction";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  filed: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const UpdateProduct = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { currentProduct } = useSelector((store) => store.editStore);

  const [product, setProductEdit] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const UpdateProduct = (p) => {
    dispatch(
      setProductEditToStore(
        setProductEdit({ ...product, [p.target.value]: p.target.value })
      )
    );
  };

  /*const onSubmitsave = async (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/:id`).then((response) => {
      history.push("/");
    });
  };*/

  const UpdateNewProduct = async (p) => {
    p.preventDefault(setProductEditToStore);
    axios
      .put(`https://fakestoreapi.com/products/${id}`, {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      })
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (p) => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(setProductEditToStore(setProductEdit(result.data)));
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
          EDIT PRODUCT
        </Typography>

        <form noValidate autoComplete="off">
          <TextField
            className={classes.filed}
            value={product.title}
            onChange={(p) => UpdateProduct(p, "title")}
            label="Product Name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.price}
            onChange={(p) => UpdateProduct(p, "price")}
            label="Product Price"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.description}
            onChange={(p) => UpdateProduct(p, "description")}
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
            onChange={(p) => UpdateProduct(p, "category")}
            label="Product Category"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />

          <TextField
            className={classes.filed}
            value={product.image}
            onChange={(p) => UpdateProduct(p, "image")}
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
            onClick={(p) => UpdateNewProduct(p)}
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

export default UpdateProduct;
