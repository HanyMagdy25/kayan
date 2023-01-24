import "./CardProduct.css"
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

      <div>
        <h2>{item.title}</h2>
        <h3 className="mt-3 productCard__title"> {truncate(item.title, 70)}</h3>
      </div>
    </div>
  );
};

export default CardProduct;
