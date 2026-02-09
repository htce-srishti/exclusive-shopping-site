import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 460 }}>
      <h2 className="fw-bold mb-3">Log In to Ecommerce</h2>
      <p className="small text-muted mb-4">
        Login page similar to Figma design.
      </p>
      <form className="card border-0 shadow-sm p-4">
        <div className="mb-3">
          <label className="form-label small">Email Address</label>
          <input className="form-control" type="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label small">Password</label>
          <input className="form-control" type="password" required />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check small">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button type="button" className="btn btn-link btn-sm p-0">
            Forgot Password?
          </button>
        </div>
        <button className="btn btn-dark w-100 mb-3" type="submit">
          Log In
        </button>
        <p className="small text-muted text-center mb-0">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;