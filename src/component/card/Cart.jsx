import "./card.css";
import shoe from "./shoe.png";
const Card = ({ productList, handleProduct }) => {
  return (
    <>
      <div className="card">
        <div className="imgBox">
          <img src={shoe} alt="mouse corsair" className="mouse" />
        </div>

        <div className="contentBox">
          <h3>{productList.productName}</h3>
          <h2 className="price">{productList.price} €</h2>
          <a
            href="#"
            className="buy"
            onClick={(e) => handleProduct(e, productList.id)}
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
