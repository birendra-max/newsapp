import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="shadow-sm text-center text-lg-start text-light mt-4" style={{ backgroundColor: "rgb(8 47 73)" }}>
                    <div className="text-center p-3 shadow-sm" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                         2024©Copyright -
                        <a className="text-light text-decoration-none" href="/"> news24x7.com</a>
                    </div>
                </footer>
            </>
        )
    }
}
