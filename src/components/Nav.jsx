import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cats">Overview</NavLink>
      <NavLink to="/add-cat">Log Out</NavLink>
    </nav>
  );
}

export default Nav;
