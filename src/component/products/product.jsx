import Card from "../card/Cart";
import "./product.css";

const Product = ({ productList, handleProduct }) => {
  return (
    <>
      <section>
        <ul className="productList">
          {productList.map((product, i) => (
            <li key={product.id}>
              <Card productList={product} handleProduct={handleProduct} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Product;
