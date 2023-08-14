import { useState } from "react";
import "./nav.css";
const Navbar = ({ cart, handleOrderConfirm, order, handleOrderShipment }) => {
  const totalAmmount = cart.reduce((acc, val) => (acc += +val.price), 0);
  const totalAmmountOrder = order.reduce((acc, val) => (acc += +val.price), 0);
  const [toggle, setToggle] = useState(true);
  const [orderToggle, setOrderToggle] = useState(true);

  console.log(totalAmmount);

  return (
    <>
      <nav>
        <div className="container">
          <h3>ECom-Pro</h3>
          <ul>
            <li>
              {console.log(toggle)}
              <a href="#" onClick={() => setToggle(!toggle)}>
                <span>{cart.length}</span> CART
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setOrderToggle(!orderToggle)}>
                <span>{order && order.length}</span> Order
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* cart */}
      <div className={toggle ? "cart" : "cart active"}>
        <div className="flex">
          <h2>Cart Data</h2>
          <h2 className="close" onClick={() => setToggle(true)}>
            x
          </h2>
        </div>
        {console.log(cart)}
        {cart.map((item) => (
          <>
            <div className="cart-display">
              <img className="cart-img" src={item.img} alt="" />
              <div className="text">
                <h3>{item.productName}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          </>
        ))}

        <div className="flex">
          <p>
            Sub Total:
            {totalAmmount}
          </p>

          {cart.length > 0 && (
            <button
              className="buy2"
              disabled={!cart.length > 0}
              onClick={handleOrderConfirm}
            >
              Confirm Order
            </button>
          )}
        </div>
      </div>
      {/* order */}
      <div className={orderToggle ? "cart" : "cart active"}>
        <div className="flex">
          <h2>Order Data</h2>
          <h2 className="close" onClick={() => setOrderToggle(true)}>
            x
          </h2>
        </div>
        {console.log(order)}
        {order &&
          order.map((item) => (
            <>
              <div className="cart-display">
                <img className="cart-img" src={item.img} alt="" />
                <div className="text">
                  <h3>{item.productName}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            </>
          ))}

        <div className="flex">
          <p>
            Sub Total:
            {totalAmmountOrder}
          </p>
          {order.length > 0 && (
            <button className="buy2" onClick={handleOrderShipment}>
              Proceed Shipment
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
