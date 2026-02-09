import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold mb-2">404 Not Found</h1>
      <p className="text-muted mb-4">
        Page you are looking for doesn&apos;t exist.
      </p>
      <Link className="btn btn-dark" to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;