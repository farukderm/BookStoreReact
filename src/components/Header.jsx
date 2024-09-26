import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span>
          <Link className="navbar-brand mb-0 fs-3 text-success" to="/">
            BookStoreShop
          </Link>
        </span>

        <div className="d-flex gap-2">
          <NavLink className="btn btn-success text-warning" to="/">
            Anasayfa
          </NavLink>
          <NavLink className="btn btn-success text-warning" to="/products">
            Ürünler
          </NavLink>
          <NavLink className="btn btn-success text-warning" to="/categories">
            Kategoriler
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
