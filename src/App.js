import "./App.css";
import TopHeader from "./Components/top-header/TopHeader";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailedNews from "./pages/DetailedNews";

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
