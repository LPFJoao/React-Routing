import { NavLink, Link } from "react-router";

function Footer() {

    return (

        <footer>
            <p>&copy; 2025 My React App. All rights reserved.</p>
            <nav>
              <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
        </footer>
    );
}

export default Footer;