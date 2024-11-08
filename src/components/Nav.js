import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#6C2BD9" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex justify-content-center align-item-center text-light border-bottom border-5 border-warning fs-4 fw-bold" href="/">
                            NEWS24x7
                        </a>
                        <button className="navbar-toggler bg-success-subtle" style={{ backgroundColor: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item d-felx justify-content-center align-item-center">
                                    <Link to="/" className="nav-link active text-light border-bottom-hover" aria-current="page"><i className="fa-solid fa-house" style={{ fontSize: "14px" }}></i> Home</Link>
                                </li>
                                <li className="nav-item d-felx justify-content-center align-item-center">
                                    <Link to="/About" className="nav-link active text-light border-bottom-hover" aria-current="page"><i className="fa-solid fa-user" style={{ fontSize: "14px" }}></i> About</Link>
                                </li>
                                <li className="nav-item d-felx justify-content-center align-item-center">
                                    <Link to="/Contact" className="nav-link active text-light border-bottom-hover" aria-current="page"><i className="fa-solid fa-square-phone" style={{ fontSize: "17px" }}></i> Contact</Link>
                                </li>
                                <li className="nav-item d-felx justify-content-center align-item-center">
                                    <Link to="/Login" className="nav-link active text-light border-bottom-hover" aria-current="page"><i className="fa-solid fa-user-lock" style={{ fontSize: "14px" }}></i> Log-in</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
