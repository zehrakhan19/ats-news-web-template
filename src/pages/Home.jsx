import React from "react";
import NewsSection from "../Components/news-section/NewsSection";
import AdSection from "../Components/google-ad-section/AdSection";
import Banner from "../Components/banner/Banner";
import FashionStyle from "../Components/fashion-and-style/FashionStyle";
import PoliticleWorld from "../Components/political-and-world/PoliticleWorld";
import EntertainmentFun from "../Components/entertainment-and-fun/EntertainmentFun";
import PaginationRounded from "../Components/pagination/Pagination";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="content-news-wrapper">
        <div className="left-content">
          <NewsSection />
          <AdSection />
          <FashionStyle />
          <PoliticleWorld />
          <EntertainmentFun />
          <PaginationRounded />
        </div>
        <div className="right-content">Advertisement</div>
      </div>
    </div>
  );
};

export default Home;
