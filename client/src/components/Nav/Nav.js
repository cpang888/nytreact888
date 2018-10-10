import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>

  <nav className="navbar navbar-dark bg-primary" style={{position: 'fixed', zIndex: 100, width: '100%'}}>
    <Link className="navbar-brand" to="/">NYT Article Search</Link>
    {/* <ul className="navbar-nav" style={{float: 'right'}}>
    </ul> */}
</nav>;

export default Nav;
