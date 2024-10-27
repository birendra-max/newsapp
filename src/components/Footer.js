import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-dark text-light py-4 px-3 mt-4">
                    <div className="container d-flex flex-wrap justify-content-between align-items-center">
                        <div className="w-100 text-center mb-3 mb-md-0">
                            <p className="mb-0 text-light">Copyright 2020 &copy; All Rights Reserved</p>
                        </div>
                        <div className="w-100 text-center">
                            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">
                                <li><a href="/" className=" text-light text-decoration-none">Contact</a></li>
                                <li className="mx-4"><a href="/" className="text-light text-decoration-none">Privacy Policy</a></li>
                                <li><a href="/" className=" text-light text-decoration-none">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
