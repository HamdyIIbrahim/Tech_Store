import React from "react";
import { Link } from "react-router-dom";
function Product({ image, name, price, Id, getData }) {
  const clicked = (id) => {
    const product = getData(id);
    return product
  };
  return (
      <Link to={`/productinfo/${Id}`}>
        <div className="card">
          <div>
            <img src={image} alt="product"></img>
          </div>
          <div className="info">
            <ul>
              <li>
                <h2>{name}</h2>
              </li>
              <li>{price}</li>
            </ul>
            <p>There are many things are needed to start the Gadget business</p>
            <ul>
              <li>
                <Link
                  id={Id}
                  className="li btn"
                  to={`/productinfo/${Id}`}
                  onClick={(e) => clicked(e.target.id)}
                >
                  more details
                </Link>
              </li>
              <li>(5.0)</li>
            </ul>
          </div>
        </div>
      </Link>
  );
}

export default Product;
