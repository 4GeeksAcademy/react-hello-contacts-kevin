import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="ml-auto">
          <Link to="/add">Add new contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
