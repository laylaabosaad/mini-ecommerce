
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav >
      <Link className="nav-link">Home</Link>
      <div className=" w-[200px] flex justify-evenly">
      <Link to="/register"  className="nav-link">Register</Link>
      <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
