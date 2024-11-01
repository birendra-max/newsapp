import React, { Component } from "react";

export default class Loader extends Component {
    render() {
        return (
            <>
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </>
        )
    }
}