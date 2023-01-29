import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CardProduct from "../CardProduct/CardProduct";
const url_main = "https://kayan-dashboard.kayanhillscrm.com";

function Products({ loadingProducts, mainPageData }) {
  const [loadingBoxes, setLoadingBoxes] = useState(true);
  const [boxesData, setBoxesData] = useState([]);
  // To Fetch Products Data
  useEffect(() => {
    fetch(`${url_main}/api/boxes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: "ar",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadingBoxes(false);
        setBoxesData(data.data);
      });
  }, []);


  return (
    <div className="products pb-5">
      <div className="container">
        {loadingProducts ? (
          <div className="spinner__div flex-center mt-5">
            <Spinner />
          </div>
        ) : (
          <>
            {" "}
            <div className="flex-center">
              <div className="main__title-div">
                <h2 className="text-center mt-5">
                  {mainPageData.secondSection.title}
                </h2>
              </div>
            </div>
            <p className="mt-5 text-center container">
              {mainPageData.secondSection.description}
            </p>
          </>
        )}
        {loadingBoxes ? (
          <div className="spinner__div flex-center mt-5">
            <Spinner />
          </div>
        ) : (
          <div className="products__cards-div">
            {boxesData.map((item, index) => (
              <CardProduct key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
