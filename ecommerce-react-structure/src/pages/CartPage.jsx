import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";
import { getProductById } from "../data/products.js";

function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useShop();

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Cart</h2>

      {cart.length === 0 ? (
        <div className="card border-0 shadow-sm p-5 text-center">
          <p className="text-muted mb-0">Your cart is empty.</p>
          <Link className="btn btn-dark mt-3" to="/">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                {cart.map((item) => {
                  const product = getProductById(item.id);
                  if (!product) return null;
                  return (
                    <div
                      key={item.id}
                      className="d-flex align-items-center gap-3 border-bottom py-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: 70,
                          height: 70,
                          objectFit: "cover",
                        }}
                        className="rounded"
                      />
                      <div className="flex-grow-1">
                        <div className="fw-semibold small">{product.name}</div>
                        <div className="small text-muted">
                          ${product.price.toFixed(2)} each
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="form-control form-control-sm"
                          style={{ width: 70 }}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                        />
                        <div className="small fw-semibold" style={{ width: 70 }}>
                          ${(product.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between small mb-2">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between small mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-semibold mb-3">
                  <span>Total</span>
                  <span className="text-danger">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="btn btn-dark w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;