import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/I/61c2Py7xhVL._SX3000_.jpg"
          alt="add"
        ></img>
        <div>
          <h3>
            <strong>Hello,</strong>
            {user?.email}
          </h3>
          <h2 className="checkout__title"> Your shopping Basket </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="chackout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
