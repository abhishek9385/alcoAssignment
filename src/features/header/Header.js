import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import './Header.css';
import { getCartItemsCount, getCartItemsTotalPrice } from "../cart/cartSlice";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flex: 1,
  },
  cartItem: {
    margin: "0 10px",
  },
}));
export default function Header() {
  const classes = useStyles();
  const cartItemsCount = useSelector(getCartItemsCount);
  const cartItemsTotalPrice = useSelector(getCartItemsTotalPrice);

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Products
          </Typography>
          <div className={classes.grow} />
          <div className="searchBox">
                                <SearchIcon style={{ color: "black" }} />
                                <Input disableUnderline={true} placeholder="Search" />
                            </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              className={classes.cartItem}
              color="inherit"
              noWrap
            >
              Total Items : {cartItemsCount}
            </Typography>
            <Typography
              variant="h6"
              className={classes.cartItem}
              color="inherit"
              noWrap
            >
              Total Items Price : {cartItemsTotalPrice}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
