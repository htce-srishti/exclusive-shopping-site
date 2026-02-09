import ProductCard from "./ProductCard.jsx";

function ProductGrid({ title, products }) {
  return (
    <section className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title mb-0">{title}</h2>
        <button className="btn btn-link p-0 text-decoration-none">
          View All →
        </button>
      </div>
      <div className="row g-3">
        {products.map((p) => (
          <div key={p.id} className="col-6 col-md-4 col-lg-3">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;