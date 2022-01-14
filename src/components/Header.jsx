import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {
  return (
    <header
      className="header"
      // @ts-ignore
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <NavItem url={'/products'} title={'Home'}/>
          <NavItem url={'/categories'} title={'Categories'}/>
          <NavItem url={'/basket'} title={'Basket'}/>
          
        </ul>
      </nav>
    </header>
  );
}
export default Header;
