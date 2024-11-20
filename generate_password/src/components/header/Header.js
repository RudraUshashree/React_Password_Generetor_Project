import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to='/' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>Color Changer</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/password-generator' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>Password Generator</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/currency-converter' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>Currency Converter</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/users' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>User</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/context-api-todo' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>Context Todo</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/redux-toolkit-todo' className={({isActive}) => `nav-link ${isActive ? 'active-link' : 'inactive-link'}`}>Redux Todo</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header