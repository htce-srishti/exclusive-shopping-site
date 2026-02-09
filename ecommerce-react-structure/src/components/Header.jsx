import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function Header() {
  const { cart, wishlist } = useShop();
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="badge-dot" />
          <span>ecommerce</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>

          <form className="d-none d-lg-flex me-3">
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search products..."
            />
          </form>

          <ul className="navbar-nav align-items-center gap-1">
            <li className="nav-item">
              <NavLink to="/wishlist" className="nav-link position-relative">
                Wishlist
                {wishlistCount > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                Cart
                {cartCount > 0 && (
                  <span className="badge bg-success rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            {/* Account dropdown like screenshot */}
            <li className="nav-item dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Account
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink to="/login" className="dropdown-item">
                    Log In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="dropdown-item">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;