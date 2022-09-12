import React from "react";
import Product from "../components/Product";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div>
        <h2>Welcome to the ecomerrce website</h2>
        <section>
          <Product />
          <Products />
        </section>
      </div>
      ;
    </>
  );
};

export default Home;
