import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dealer from "./pages/dealer";
import Accessories from "./pages/accessories";
import Forum from "./pages/forum";
import Product from "./pages/products";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/products" element = {<Product />}/>
        <Route path = "/accessories" element = {<Accessories />}/>
        <Route path = "/forum" element = {<Forum />}/>
        <Route path = "/dealer" element = {<Dealer />}/>

      </Routes>
    </Router>
  );
}

export default App;