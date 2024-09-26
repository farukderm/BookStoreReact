import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container vh-90 d-flex flex-column my-4 gap-5 align-items-center">
      <h1 className="text-center fs-1">Hoşgeldiniz</h1>
      <img className="img-fluid rounded image" src="/welcome.jpg" alt="web" />
      <p>
        Bookstore mağazasına hoşgeldiniz.Kitaplarımıza{" "}
        <Link to="/products">ürünler sayfasından </Link>
        ulaşabilirsiniz
      </p>
    </div>
  );
};

export default Home;
