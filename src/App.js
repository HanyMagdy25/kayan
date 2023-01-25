import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
