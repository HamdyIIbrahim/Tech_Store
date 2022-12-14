import { createContext, useState } from "react";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    image: "/products/product.webp",
    price: "220",
    name: "Beats 200X",
    category: "headphones",
    quantity:1
  },
  {
    id: "2",
    image: "/products/product2.jpg",
    price: "420",
    name: "Smart watch",
    category: "watch",
    quantity:0
  },
  {
    id: "3",
    image: "/products/product3.jpg",
    price: "360",
    name: "Airpods 12",
    category: "headphones",
    quantity:0
  },
  {
    id: "4",
    image: "/products/product4.jpg",
    price: "120",
    name: "Airpods pro",
    category: "headphones",
    quantity:0
  },
  {
    id: "5",
    image: "/products/product5.jpg",
    price: "230",
    name: "Beats 100X",
    category: "headphones",
    quantity:0
  },
  {
    id: "6",
    image: "/products/product6.jpg",
    price: "570",
    name: "Smart Org",
    category: "watch",
    quantity:0
  },
  {
    id: "7",
    image: "/products/product7.jpg",
    price: "220",
    name: "Air dos",
    category: "headphones",
    quantity:0
  },
  {
    id: "8",
    image: "/products/product8.jpg",
    price: "1220",
    name: "Iphone",
    category: "phones",
    quantity:0
  },
];

export const ProductContext = createContext({
  product: [],
  getProductById: (id) => {},
  shoppingList: (productDetail) => {},
  listItems: [],
  removeProductById: (id) => {},
  getQuantity: (id) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
  orderConfirmed: () => {},
  
});

const ProductProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);

  const getProductById = (id) => {
    return DUMMY_PRODUCTS.filter((product) => product.id === id);
  };
  const removeProductById = (id) => {
    setListItems((currentList) => {
      const productId = currentList.findIndex((curr) => curr.id === id);
      if (productId === -1) return currentList;
      let updatedList = [...currentList];
      updatedList.splice(productId, 1);
      return updatedList;
    });
  };
  const shoppingList = (productDetail) => {
    setListItems((currentList) => {
      const productId = currentList.findIndex(
        (curr) => curr.id === productDetail.id
      );
      if (productId !== -1) return currentList;
      let updatedList = [...currentList];
      updatedList.push(productDetail);
      return updatedList;
    });
  };

  const getQuantity = (id) => {
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id)
    const itemQuantity = DUMMY_PRODUCTS[index].quantity
    return itemQuantity
  };
  const increaseQuantity = (id) => {
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id)
    DUMMY_PRODUCTS[index].quantity = DUMMY_PRODUCTS[index].quantity + 1;
    const itemQuantity = DUMMY_PRODUCTS[index].quantity
    return itemQuantity

  };
  const decreaseQuantity = (id) => {
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id)
    if(DUMMY_PRODUCTS[index].quantity >=0){
      DUMMY_PRODUCTS[index].quantity -=1;
      const itemQuantity = DUMMY_PRODUCTS[index].quantity
      return itemQuantity
    }else{
      return 0;
    }
  };
  const orderConfirmed =()=>{
    setListItems([]);
  }

  return (
    <ProductContext.Provider
      value={{
        product: DUMMY_PRODUCTS,
        getProductById,
        shoppingList,
        listItems,
        removeProductById,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        orderConfirmed,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
