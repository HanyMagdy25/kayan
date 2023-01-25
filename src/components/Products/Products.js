import React from "react";
import { productsData } from "../../utils/data";
import CardProduct from "../CardProduct/CardProduct";

function Products() {
  return (
    <div className="products pb-5">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="text-center mt-5">مشاريعنا</h2>
          </div>
        </div>
        <p className="mt-5 text-center container">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد ت توليد هذا
          النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس
          المساحة، لقد ت توليد هذا النص من مولد النص العربى
        </p>
        <div className="products__cards-div">
          {productsData.map((item, index) => (
            <CardProduct key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
