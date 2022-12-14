import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import LogNav from "./logNav";
import Nav from "./nav";
import Main from './main'
import Features from './features'
import Selling from './bestSelling'
import Footer from "./footer";

function Home() {
  const { disable } = useContext(ProductContext);
  const data = useContext(ProductContext).product;
  return (
    <React.Fragment>
      {disable ? <LogNav /> : <Nav />}
      <div className="containerr">
        <Main />
        <Features />
        <Selling Data={data} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
