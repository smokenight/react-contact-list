import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark fixed-top">
      <div className="container d-flex justify-content-between">
        <div>
          <Link to="/">
            <span className="navbar-brand mb-0 h1 ms-auto">
              <i className="bi bi-house-door-fill fs-2 text-light"></i>
            </span>
          </Link>
        </div>
        {/* Colocamos ambos botones juntos */}
        <div className="d-flex align-items-center">
          <Link to="/addcontact">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
