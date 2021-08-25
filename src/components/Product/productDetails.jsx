import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

import { setProductDetailsToStore } from "../../store/action/productDetailsAction";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  const { currentProduct } = useSelector((store) => store.detailStore);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        dispatch(setProductDetailsToStore(response.data));
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  }, []);

  const UpdateProduct = (id) => {
    history.push(`/Update-product/${id}`);
  };

  const DeleteProduct = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((response) => {
      history.push("/");
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <img src={currentProduct?.image} style={{ width: "250px" }} alt="" />

        <p>{currentProduct?.title}</p>
        <p>{currentProduct?.description}</p>
        <p>Category: {currentProduct?.category}</p>
        <p>price: {currentProduct?.price}</p>
        <Button
          onClick={() => UpdateProduct(currentProduct?.id)}
          variant="contained"
          color="primary"
        >
          Update Product
        </Button>
        <Button
          onClick={() => DeleteProduct(currentProduct?.id)}
          variant="contained"
          color="secondary"
        >
          Delete Product
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetails;
