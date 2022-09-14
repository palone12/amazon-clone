import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/GW/announce/Announce_1500x300._CB474500381_.jpg"
          alt="home-img"
        />
        <div className="home__row">
          <Product
            id="123421"
            title="Apple Iphone 13"
            price={69000}
            image={
              "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
            }
            rating={5}
          />
          <Product
            id="123422"
            title="Tribit X-Free"
            price={2999}
            image={
              "https://m.media-amazon.com/images/I/71DbAq4nG1L._SY879_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123423"
            title="LG Ultrawide 29Wl50S 29 Inches (73 cm)  "
            price={18000}
            image={
              "https://m.media-amazon.com/images/I/61dVD28WPrL._SX679_.jpg"
            }
            rating={4}
          />
          <Product
            id="123424"
            title="Noise ColorFit Pulse Grand Smart Watch "
            price={2799}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/41AIJsdZk-L._SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={4}
          />
          <Product
            id="123425"
            title="OnePlus Nord CE 2 Lite 5G "
            price={21500}
            image={
              "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg"
            }
            rating={4}
          />
          <Product
            id="123426"
            title="boAt Airdopes 121v2 True Wireless Earbuds"
            price={1980}
            image={
              "https://m.media-amazon.com/images/I/510+wjzq-vL._SX522_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123427"
            title="Ugly Love"
            price={250}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51H48Jb3V9L._SY389_BO1,204,203,200_.jpg"
            }
            rating={4}
          />
          <Product
            id="123428"
            title="Asus ROG Strix"
            price={75000}
            image={
              "https://m.media-amazon.com/images/I/61bwqXfWiaL._SL1500_.jpg"
            }
            rating={4}
          />
          <Product
            id="123429"
            title="Fujifilm X-T4 26 MP "
            price={28000}
            image={
              "https://m.media-amazon.com/images/I/71BtxnjY0aL._SX679_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123420"
            title="Wifi Router"
            price={3999}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/31EX-F8WF7L._SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={3}
          />
          <Product
            id="123411"
            title="Solimo Bottle"
            price={1999}
            image={
              "https://m.media-amazon.com/images/I/61PIPuk5SYL._SY879_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
