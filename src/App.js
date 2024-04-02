import "./App.css";
import TopHeader from "./Components/top-header/TopHeader";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailedNews from "./pages/DetailedNews";
import Banner from "./Components/banner/Banner";
import NewsSection from "./Components/news-section/NewsSection";
import PaginationRounded from "./Components/pagination/Pagination";
import EntertainmentFun from "./Components/entertainment-and-fun/EntertainmentFun";
import PoliticleWorld from "./Components/political-and-world/PoliticleWorld";
import FashionStyle from "./Components/fashion-and-style/FashionStyle";
import AdSection from "./Components/google-ad-section/AdSection";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="ad">
          <div>Advertisement</div>
        </div>
        <div className="app">
          <TopHeader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/detailed-news" element={<DetailedNews />}></Route>
          </Routes>
          <Footer />
        </div>
        <div className="ad">
          <div>Advertisement</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
