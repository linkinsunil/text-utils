import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input mx-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{`${props.mode==='dark'?'light':'dark'} mode`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired, 
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: "Set Title Here",
    home: "Home",
    about: "About"
}

export default NavBar
