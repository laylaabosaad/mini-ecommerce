import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { logout } from "../../actions/auth";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { role, authenticated, loading, refreshUser } = useContext(UserContext);

  const getLinkClass = (path) =>
    location.pathname === path ? "nav-link-active" : "nav-link";

  const handleLogout = async () => {
    try {
      const result = await logout();

      if (result.success) {
        refreshUser();
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const renderNavLinks = () => (
    <>
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={getLinkClass("/")}
      >
        Home
      </Link>

      {!authenticated && (
        <>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className={getLinkClass("/register")}
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className={getLinkClass("/login")}
          >
            Login
          </Link>
        </>
      )}

      {authenticated && role === "admin" && (
        <Link
          to="/dashboard"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass("/dashboard")}
        >
          Dashboard
        </Link>
      )}

      {authenticated && (
        <button
          onClick={() => {
            setMenuOpen(false);
            handleLogout();
          }}
          className="nav-link text-left"
        >
          Logout
        </button>
      )}
    </>
  );

  return (
    <nav>
      <Link to="/" className="text-xl font-bold">
        Logo
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex space-x-6 items-center">
        {renderNavLinks()}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 py-4 px-6 md:hidden shadow-md z-10">
          {renderNavLinks()}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
