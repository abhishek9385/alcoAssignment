import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getProductsCount } from "./productSlice";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../product-card/ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import { addToCartAsync } from "../cart/cartSlice";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const countPerPage = 5;
  const products = useSelector(getProducts(currentPage, countPerPage));
  const totalPages = useSelector(getProductsCount);
  const dispatch = useDispatch();

  const classes = useStyles();

  const changePageNumber = (e, value) => {
    if (Math.round(totalPages / countPerPage) >= value) {
      setCurrentPage(value);
    }
  };
  const addToCart = (product) => {
    dispatch(addToCartAsync(product));
  };
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products?.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.root}>
          <Pagination
            count={Math.round(totalPages / countPerPage)}
            onChange={changePageNumber}
            page={currentPage}
          />
        </div>
      </Container>
    </div>
  );
}
