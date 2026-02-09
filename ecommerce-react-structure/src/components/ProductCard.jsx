import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const inWishlist = wishlist.includes(product.id);

  return (
    <div className="card product-card h-100 border-0">
      <div className="product-image-wrapper position-relative">
        {product.discount && (
          <span className="badge badge-discount position-absolute top-0 start-0 m-2">
            -{product.discount}%
          </span>
        )}
        {product.badge && (
          <span className="badge bg-dark position-absolute top-0 end-0 m-2">
            {product.badge}
          </span>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
          />
        </Link>
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="product-title mb-1">{product.name}</h6>
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="product-old-price">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="small text-muted mb-3">
          ★ {product.rating} · {product.reviewCount} reviews
        </div>
        <div className="mt-auto d-flex gap-2">
          <button
            className="btn btn-sm btn-dark flex-grow-1"
            onClick={() => addToCart(product.id)}
          >
            Add to cart
          </button>
          <button
            type="button"
            className={`btn btn-sm ${
              inWishlist ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => toggleWishlist(product.id)}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;