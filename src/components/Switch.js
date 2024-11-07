import React, { Component } from 'react'

export default class Switch extends Component {
    constructor() {
        super();
        this.state = {
            islight: true
        };
    }
    darkMode = async () => {
        this.setState({
            islight: false
        })

        document.getElementById('root').style.backgroundColor="black";
        document.getElementById('root').style.color="white";
    }

    lightMode = async () => {
        this.setState({
            islight: true,
        })
        document.getElementById('root').style.backgroundColor="white";
        document.getElementById('root').style.color="black";
    }

    render() {
        return (
            <>
                <div className='float-end m-4 d-flex justify-content-center align-item-center d-none d-md-block' style={{ width: "5vh", height: "5vh", position: "static" }}>
                    {(this.state.islight) ? <button onClick={this.darkMode} class="fa-solid fa-moon" style={{ fontSize: "30px", color: "#ffc107", border: "none", background: "none" }}></button>: <button  onClick={this.lightMode} className="fa-solid fa-sun btn btn-success" style={{ fontSize: "30px", color: "#ffc107", border: "none", background: "none" }}></button>}
                </div>
            </>
        )
    }
}