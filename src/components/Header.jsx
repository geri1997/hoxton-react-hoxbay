import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header({ setModal, user, setUser }) {
  return (
    <header
      className="header"
      // @ts-ignore
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        <Link to="/">Hoxbay</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <NavItem url={"/products"} title={"Home"} />
          <NavItem url={"/categories"} title={"Categories"} />
          <NavItem url={"/basket"} title={"Basket"} />
          {!user && (
            <>
              <li onClick={() => setModal("login")}>Sign In</li>
              <li onClick={() => setModal("sign up")}>Sign Up</li>
            </>
          )}
          {user && (
            <>
              <li
                onClick={() => {
                  setModal(null);
                  setUser(null);
                }}
              >
                Sign Out
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
