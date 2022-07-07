const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="www.google.com">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">{props.totalCount}</span>
            </a>
        </nav>
    );
}
export default NavBar;
