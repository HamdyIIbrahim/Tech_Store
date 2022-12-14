import React from "react";
import Footer from "./footer";
import LogNav from "./logNav";
import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import Nav from "./nav";
function AboutUs() {
  const { disable } = useContext(ProductContext);
  return (
    <React.Fragment>
      {disable ? <LogNav /> : <Nav />}
      <div className="aboutUS">
        <div className="aboutText">
          <h1>Our Vision</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis est perferendis temporibus maiores dolorem dolores atque
            corrupti enim facere. Natus omnis ullam maiores vitae eius autem
            modi dolore reiciendis, minus similique distinctio consequuntur.
            Obcaecati repellat earum necessitatibus dolore quisquam!
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="photo">
          <img src="/products/aboutus1.webp" alt="person"></img>
        </div>
      </div>
      <div className="aboutUS reverse">
        <div className="aboutText">
          <h1>Our Approch</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis est perferendis temporibus maiores dolorem dolores atque
            corrupti enim facere. Natus omnis ullam maiores vitae eius autem
            modi dolore reiciendis, minus similique distinctio consequuntur.
            Obcaecati repellat earum necessitatibus dolore quisquam!
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="photo">
          <img src="/products/aboutus2.webp" alt="person"></img>
        </div>
      </div>
      <div className="aboutUS">
        <div className="aboutText">
          <h1>Our Process</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis est perferendis temporibus maiores dolorem dolores atque
            corrupti enim facere. Natus omnis ullam maiores vitae eius autem
            modi dolore reiciendis, minus similique distinctio consequuntur.
            Obcaecati repellat earum necessitatibus dolore quisquam!
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="photo">
          <img src="/products/aboutus3.jpg" alt="person"></img>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AboutUs;
