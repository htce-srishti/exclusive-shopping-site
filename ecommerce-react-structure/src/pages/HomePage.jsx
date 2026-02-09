import { categories, products } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";

function HomePage() {
  const flashSale = products.slice(0, 3);
  const bestSelling = products;
  const newArrivals = products.slice().reverse();

  return (



    
    <div className="container py-4">
      {/* Hero like E‑Commerce HomePage */}
      <section className="hero-section row g-3 align-items-center mb-4">
        <div className="col-lg-7">
          <div className="hero-badge mb-3">
            <span className="badge-dot" />
            <span>iphone 14 series</span>
          </div>
          <h1 className="display-6 fw-bold mb-3">
            Up to <span className="text-warning">10%</span> Of voucher.
          </h1>
          <p className="mb-4">
            Discover best‑selling gadgets, fashion and more. Clean layout similar
            to your Figma design.
          </p>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-success hero-cta-btn">Shop Now</button>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <img
            className="img-fluid rounded-4 shadow-lg"
            src="  src/pages/hero_endframe__cvklg0xk3w6e_large 2.svg   "
            alt="Hero"
          />
        </div>
      </section>

      {/* Browse by Category */}
      <section className="my-4">
        <h2 className="section-title mb-3">Browse By Category</h2>
        <div className="row g-3">
          {categories.map((c) => (
            <div key={c.id} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm text-center p-3">
                <h6 className="fw-semibold">{c.label}</h6>
                <p className="small mb-0 text-muted">
                  Explore top {c.label.toLowerCase()} products.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductGrid title="Flash Sale Today" products={flashSale} />
      <ProductGrid title="Best Selling Products" products={bestSelling} />
      <ProductGrid title="New Arrivals" products={newArrivals} />
    </div>
  );
}

export default HomePage;