import React, { Component } from 'react'

export default class Badge extends Component {
    render() {
        return (
            <>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    New
                </span>
            </>
        )
    }
}
