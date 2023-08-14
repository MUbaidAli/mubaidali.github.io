// import logo from "./logo.svg";
import { useState } from "react";
import Product from "./component/products/product";
import Navbar from "./component/nav/nav";
import "./App.css";
import productImage from "./assets/shoe.png";
function App() {
  const [products, setProducts] = useState([
    { id: 1, img: productImage, productName: "Nike Joggers", price: 150 },
    { id: 2, img: productImage, productName: "Nike Joggers", price: 200 },
    { id: 3, img: productImage, productName: "Nike Joggers", price: 250 },
    { id: 4, img: productImage, productName: "Nike Joggers", price: 100 },
    { id: 5, img: productImage, productName: "Nike Joggers", price: 50 },
    { id: 6, img: productImage, productName: "Nike Joggers", price: 80 },
    { id: 7, img: productImage, productName: "Nike Joggers", price: 170 },
  ]);

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  function handleProduct(e, id) {
    e.preventDefault();
    console.log(id);
    let product = products.filter((item) => item.id === id);

    setCart((previtem) => [...previtem, ...product]);
  }

  function handleOrder() {
    console.log("order");
    // setOrder([cart]);
  }
  function handleOrderConfirm() {
    console.log("order");
    setOrder([...cart]);
    setCart([]);
  }
  function handleOrderShipment() {
    setOrder([]);
    alert(
      "Your Order Has been Shipped Without Address And Details  Chears ...."
    );
  }
  return (
    <>
      <Navbar
        cart={cart}
        handleOrderConfirm={handleOrderConfirm}
        order={order}
        handleOrderShipment={handleOrderShipment}
      />
      <div className="container">
        <Product
          productList={products}
          handleProduct={handleProduct}
          order={order}
        />
      </div>
    </>
  );
}

export default App;
