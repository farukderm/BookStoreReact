import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";
const App = () => {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/categories" element={<Category />}>
              <Route path="hikaye" element={<h1>HİKAYE</h1>} />
              <Route path="roman" element={<h1>ROMAN</h1>} />
            </Route>
            <Route path="*" element={<Undefined />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
