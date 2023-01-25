import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";

const url_main = "https://kayan-dashboard.kayanhillscrm.com";

const Home = () => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [mainPageData, setMainPageData] = useState([]);
  // To Fetch Products Data
  useEffect(() => {
    fetch(`${url_main}/api/mainPage`, {
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
        setLoadingProducts(false);
        setMainPageData(data.data);
      });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{mainPageData?.SEO?.title}</title>
          <meta property="title" content={mainPageData?.SEO?.title} />
          <meta property="quote" content={mainPageData?.SEO?.keywords} />
          <meta name="description" content={mainPageData?.SEO?.description} />
          <meta property="og:locale" content="ar_KSA" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={mainPageData?.SEO?.title}/>
          <meta property="og:quote" content={mainPageData?.SEO?.keywords}  />
          {/* <meta property="image" content={articleIn.img} /> */}
          {/* <meta property="og:image" content={articleIn.img} /> */}
          {/* <meta content="image/*" property="og:image:type" /> */}
          {/* <meta property="og:site_name" content="Kayan" /> */}
        </Helmet>
      </HelmetProvider>
      <div>
        <Contact
          mainPageData={mainPageData}
          loadingProducts={loadingProducts}
        />
        <Products
          mainPageData={mainPageData}
          loadingProducts={loadingProducts}
        />
      </div>
    </>
  );
};

export default Home;
