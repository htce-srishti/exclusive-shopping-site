import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { useShop } from "../context/ShopContext.jsx";

function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const inWishlist = product && wishlist.includes(product.id);

  if (!product) {
    return (
      <div className="container py-5">
        <h2 className="fw-bold mb-2">Product Not Found</h2>
        <p className="text-muted mb-3">
          The product you are looking for does not exist.
        </p>
        <Link className="btn btn-dark" to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="row g-4">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <div className="small text-muted mb-2">
            ★ {product.rating} · {product.reviewCount} reviews
          </div>
          <div className="d-flex align-items-end gap-2 mb-3">
            <span className="product-price display-6">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="product-old-price">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            {product.discount && (
              <span className="badge badge-discount">
                -{product.discount}% OFF
              </span>
            )}
          </div>
          <p className="text-muted mb-4">{product.description}</p>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-dark px-4"
              onClick={() => addToCart(product.id)}
            >
              Add to cart
            </button>
            <button
              className={`btn ${
                inWishlist ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => toggleWishlist(product.id)}
            >
              {inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            </button>
          </div>

          <div className="card border-0 bg-light p-3">
            <div className="small mb-1">
              <strong>Free Shipping</strong> on orders over $99
            </div>
            <div className="small">
              <strong>Returns:</strong> 30‑day return policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;