import { NavLink } from "react-router-dom";

function Nav({ title }) {
  return (
    <nav className="navbar">
      <div className="nav-title">𑁍DDJ Budget Hub</div>
      {title === "budget" ? (
        <NavLink className="nav-item" to="/chartPage">
          Chart
        </NavLink>
      ) : (
        <NavLink className="nav-item" to="/budget">
          Budget
        </NavLink>
      )}
      <NavLink className="nav-item" to="/sign-out">
        Sign Out
      </NavLink>
    </nav>
  );
}

export default Nav;
