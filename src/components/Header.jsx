import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header({ setModal, user, setUser, setSearchTerm, searchTerm }) {
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
          <NavItem
            setSearchTerm={setSearchTerm}
            url={"/products"}
            title={"Home"}
          />
          <NavItem
            setSearchTerm={setSearchTerm}
            url={"/categories"}
            title={"Categories"}
          />
          <NavItem
            setSearchTerm={setSearchTerm}
            url={"/basket"}
            title={"Basket"}
          />
          {!user && (
            <>
              <li style={{cursor:'pointer'}}
                onClick={() => {
                  setModal("login");
                  setSearchTerm("");
                }}
              >
                Sign In
              </li>
              <li style={{cursor:'pointer'}}
                onClick={() => {
                  setModal("sign up");
                  setSearchTerm("");
                }}
              >
                Sign Up
              </li>
            </>
          )}
          {user && (
            <>
              <li style={{cursor:'pointer'}}
                onClick={() => {
                  setModal(null);
                  setUser(null);
                  setSearchTerm("");
                }}
              >
                Sign Out
              </li>
            </>
          )}
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search"
            value={searchTerm}
            type="search"
          />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
