import './NavBar.css'

function NavBar() {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <a href="/" className="link">Home</a>
        </li>
        <li className="li">
          <a href="/signup" className="link">Sign up</a>
        </li>
        <li className="li">
          <a href="/login" className="link">Users</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;