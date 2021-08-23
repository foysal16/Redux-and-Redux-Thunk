import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

import { useParams, useHistory } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const history = useHistory();

  const [ProductDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  }, [id]);

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
        <img src={ProductDetails.image} style={{ width: "250px" }} alt="" />

        <p>{ProductDetails.title}</p>
        <p>{ProductDetails.description}</p>
        <p>Category: {ProductDetails.price}</p>
        <p>price: {ProductDetails.price}</p>
        <Button
          onClick={() => UpdateProduct(ProductDetails.id)}
          variant="contained"
          color="primary"
        >
          Update Product
        </Button>
        <Button
          onClick={() => DeleteProduct(ProductDetails.id)}
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
