import { createContext, useState } from "react";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    image: "/products/product.webp",
    price: "220",
    name: "Beats 200X",
    category: "headphones",
  },
  {
    id: "2",
    image: "/products/product2.jpg",
    price: "420",
    name: "Smart watch",
    category: "watch",
  },
  {
    id: "3",
    image: "/products/product3.jpg",
    price: "360",
    name: "Airpods 12",
    category: "headphones",
  },
  {
    id: "4",
    image: "/products/product4.jpg",
    price: "120",
    name: "Airpods pro",
    category: "headphones",
  },
  {
    id: "5",
    image: "/products/product5.jpg",
    price: "230",
    name: "Beats 100X",
    category: "headphones",
  },
  {
    id: "6",
    image: "/products/product6.jpg",
    price: "570",
    name: "Smart Org",
    category: "watch",
  },
  {
    id: "7",
    image: "/products/product7.jpg",
    price: "220",
    name: "Air dos",
    category: "headphones",
  },
  {
    id: "8",
    image: "/products/product8.jpg",
    price: "1220",
    name: "Iphone",
    category: "phones",
  },
];

export const ProductContext = createContext({
  product:[],
  getProductById:(id)=>{}
});

const ProductProvider = ({ children }) => {
  // const [product, setProduct] = useState(DUMMY_PRODUCTS);

  const getProductById = (id)=>{
    return DUMMY_PRODUCTS.filter((product)=> product.id === id)
  }

  return <ProductContext.Provider value={{product:DUMMY_PRODUCTS,getProductById}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
