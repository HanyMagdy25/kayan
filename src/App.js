import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
