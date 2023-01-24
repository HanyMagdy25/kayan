import React from "react";
import { productsData } from "../../utils/data";
import CardProduct from "../CardProduct/CardProduct";

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="flex-center">
          <div className="main__title-div">
            <h2 className="text-center mt-5">مشاريعنا</h2>
          </div>
        </div>
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
