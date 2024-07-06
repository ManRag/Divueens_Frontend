import React from "react";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import Banner from "../components/Home/Banner/Banner";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import ExclusiveDiscount from "../components/Home/Exclusive_discount/ExclusiveDiscount";
import ShopByCategory from "../components/Home/ShopByCategory/ShopByCategory";
import Subscription from "../components/Home/Subscription/Subscription";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSeller />
      <TopBrands />
      <ExclusiveDiscount />
      <ShopByCategory />
      <Subscription />
    </>
  );
};

export default Home;
