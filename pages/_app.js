import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse("cart"));
        saveCart(JSON.parse("cart"));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let subT = 0;
    let keys = Object.keys(myCart);

    for (let index = 0; index < keys.length; index++) {
      subT += myCart[keys[index]].price * myCart[keys[index]].qty;
      setSubTotal(subT);
    }
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
    setSubTotal(0);
  };
  return (
    <>
      <Header
        key={subTotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
