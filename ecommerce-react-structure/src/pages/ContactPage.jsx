function ContactPage() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Contact</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <form className="card border-0 shadow-sm p-4">
            <div className="mb-3">
              <label className="form-label small">Name</label>
              <input className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label small">Email</label>
              <input className="form-control" type="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label small">Message</label>
              <textarea className="form-control" rows="4" required />
            </div>
            <button className="btn btn-dark w-100" type="submit">
              Send message
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h6 className="fw-bold mb-2">Customer Support</h6>
            <p className="small text-muted mb-3">
              We usually reply within 24 hours (Mon‑Fri).
            </p>
            <p className="small mb-1">Email: support@example.com</p>
            <p className="small mb-1">Phone: +1 (555) 123‑4567</p>
            <p className="small mb-0">
              Address: 123 Commerce Street, Online City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;