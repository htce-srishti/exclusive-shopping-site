import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-dark mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="text-white mb-3">ecommerce</h5>
            <p className="small mb-2">
              Modern e‑commerce UI built with React and Bootstrap.
            </p>
            <p className="small mb-0">
              © {new Date().getFullYear()} ecommerce. All rights reserved.
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-white mb-3">Shop</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/">New Arrivals</Link>
              </li>
              <li>
                <Link to="/">Best Sellers</Link>
              </li>
              <li>
                <Link to="/">Sale</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Shipping & Returns</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-3">Follow</h6>
            <p className="small mb-1">Instagram · Facebook · Twitter</p>
            <p className="small mb-0">Made with ♥ in React.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;