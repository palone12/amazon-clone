import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Order from "./components/Order";

const promise = loadStripe(
  "pk_test_51LdD0BSHdUkfBiQUq405KA79PBvMeCVPRciffmapDPXscCBjlgMYTT0jWNQFYFiQK29mgLL3FzHWmTa3zeTzWSfa00quECgnPp"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once whwn the app  component loadds
    auth.onAuthStateChanged((authUser) => {
      console.log("THE_USE IS >>", authUser);

      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <div>
        <Link to="/home" />
      </div>

      <Routes>
        <Route path="/orders" element={<Order />} />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Header /> <Home />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
