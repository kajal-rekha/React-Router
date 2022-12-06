import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "teal" : null,
    };
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>React Router Pro.</span>
      </div>
      <div className="links">
        <NavLink end to="/" style={navActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/theater" style={navActiveStyle}>
          Theater
        </NavLink>
        <NavLink to="/about" style={navActiveStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={navActiveStyle}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
