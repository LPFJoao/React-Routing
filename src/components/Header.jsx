import { NavLink, Link } from "react-router";

function Header() {

    return(

       <header>
        <nav>
          <h1>My React App</h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
       </header>

    );
}

export default Header;