import { useShop } from "../context/ShopContext.jsx";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

function WishlistPage() {
  const { wishlist } = useShop();
  const wishProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Wishlist</h2>
      {wishProducts.length === 0 ? (
        <div className="card border-0 shadow-sm p-5 text-center">
          <p className="text-muted mb-0">No items in wishlist yet.</p>
        </div>
      ) : (
        <div className="row g-3">
          {wishProducts.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;