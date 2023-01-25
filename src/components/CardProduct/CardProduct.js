import "./CardProduct.css";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="productCard">
      <Link to={`/`}>
        <div className="productCard__image">
          <img src={item.image} alt="product" />
        </div>
      </Link>

      <div className="p-3">
        <h2 className="productCard__title">{item.title}</h2>
        <p className="productCard__content"> {truncate(item.description, 100)}</p>
      </div>
    </div>
  );
};

export default CardProduct;
