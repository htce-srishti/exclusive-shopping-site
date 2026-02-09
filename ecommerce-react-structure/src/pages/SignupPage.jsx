import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h2 className="fw-bold mb-3">Create an Account</h2>
      <p className="small text-muted mb-4">
        Sign‑up page similar to your design.
      </p>
      <form className="card border-0 shadow-sm p-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label small">First Name</label>
            <input className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label small">Last Name</label>
            <input className="form-control" required />
          </div>
          <div className="col-12">
            <label className="form-label small">Email Address</label>
            <input className="form-control" type="email" required />
          </div>
          <div className="col-12">
            <label className="form-label small">Password</label>
            <input className="form-control" type="password" required />
          </div>
        </div>
        <button className="btn btn-dark w-100 mt-4 mb-3" type="submit">
          Sign Up
        </button>
        <p className="small text-muted text-center mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;