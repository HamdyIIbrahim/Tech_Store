import { createContext, useState } from "react";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    image: "/products/product.webp",
    price: "220",
    name: "Beats 200X",
    category: "headphones",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "2",
    image: "/products/product2.jpg",
    price: "420",
    name: "Smart watch",
    category: "watch",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "3",
    image: "/products/product3.jpg",
    price: "360",
    name: "Airpods 12",
    category: "headphones",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "4",
    image: "/products/product4.jpg",
    price: "120",
    name: "Airpods pro",
    category: "headphones",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "5",
    image: "/products/product5.jpg",
    price: "230",
    name: "Beats 100X",
    category: "headphones",
    quantity: 1,
    Rate: 5,
  },
  {
    id: "6",
    image: "/products/product6.jpg",
    price: "570",
    name: "Smart Org",
    category: "watch",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "7",
    image: "/products/product7.jpg",
    price: "220",
    name: "Air dos",
    category: "headphones",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "8",
    image: "/products/product8.jpg",
    price: "1220",
    name: "Iphone",
    category: "phones",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "9",
    image: "/products/mouse 1.jpg",
    price: "20",
    name: "hp x200",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "10",
    image: "/products/mouse 2.jpg",
    price: "20",
    name: "hp",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "11",
    image: "/products/mouse 3.jpg",
    price: "50",
    name: "ZR led",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "12",
    image: "/products/mouse 4.jpg",
    price: "30",
    name: "zaro",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "13",
    image: "/products/mouse 5.jpg",
    price: "40",
    name: "M656",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "14",
    image: "/products/mouse 6.jpg",
    price: "60",
    name: "S200 led",
    category: "mouse",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "15",
    image: "/products/smart 3.jpg",
    price: "170",
    name: "Skimi",
    category: "watch",
    quantity: 1,
    Rate: 5,
  },
  {
    id: "16",
    image: "/products/smart 4.jpg",
    price: "270",
    name: "Skimi",
    category: "watch",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "17",
    image: "/products/smart 5.jpg",
    price: "570",
    name: "Casio",
    category: "watch",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "19",
    image: "/products/smart 6.jpg",
    price: "380",
    name: "Casio",
    category: "watch",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "20",
    image: "/products/a1.jpg",
    price: "38",
    name: "Alarm",
    category: "Alarm",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "21",
    image: "/products/a2.jpg",
    price: "30",
    name: "Alarm",
    category: "Alarm",
    quantity: 1,
    Rate: 4,
  },
  {
    id: "22",
    image: "/products/a3.jpg",
    price: "38",
    name: "Alarm",
    category: "Alarm",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "23",
    image: "/products/a4.jpg",
    price: "80",
    name: "Alarm",
    category: "Alarm",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "24",
    image: "/products/c1.jpg",
    price: "180",
    name: "fx570",
    category: "calculator",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "25",
    image: "/products/c2.jpg",
    price: "130",
    name: "Casio 991",
    category: "calculator",
    quantity: 1,
    Rate: 4,
  },
  {
    id: "26",
    image: "/products/d1.jpg",
    price: "400",
    name: "SY v40900",
    category: "dvd",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "27",
    image: "/products/d2.jpg",
    price: "940",
    name: "dvd sxz 989",
    category: "dvd",
    quantity: 1,
    Rate: 3,
  },
  {
    id: "28",
    image: "/products/e1.jpg",
    price: "80",
    name: "Kindle Paperwhite",
    category: "ebook",
    quantity: 1,
    Rate: 4,
  },
  {
    id: "29",
    image: "/products/e2.jpg",
    price: "70",
    name: "Kindle Paperblue",
    category: "ebook",
    quantity: 1,
    Rate: 4,
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
  handleLogin: () => {},
});

const ProductProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);
  const [disable, setDisable] = useState(false);

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
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id);
    const itemQuantity = DUMMY_PRODUCTS[index].quantity;
    return itemQuantity;
  };
  const increaseQuantity = (id) => {
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id);
    DUMMY_PRODUCTS[index].quantity = DUMMY_PRODUCTS[index].quantity + 1;
    const itemQuantity = DUMMY_PRODUCTS[index].quantity;
    return itemQuantity;
  };
  const decreaseQuantity = (id) => {
    const index = DUMMY_PRODUCTS.findIndex((item) => item.id === id);
    if (DUMMY_PRODUCTS[index].quantity >= 0) {
      DUMMY_PRODUCTS[index].quantity -= 1;
      const itemQuantity = DUMMY_PRODUCTS[index].quantity;
      return itemQuantity;
    } else {
      return 0;
    }
  };
  const orderConfirmed = () => {
    setListItems([]);
  };

  const handleLogin = () => {
    setDisable(true);
  };

  return (
    <ProductContext.Provider
      value={{
        product: DUMMY_PRODUCTS,
        getProductById,
        shoppingList,
        listItems,
        disable,
        removeProductById,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        orderConfirmed,
        handleLogin,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
