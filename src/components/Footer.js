import React,{Component} from "react";

export default class Footer extends Component{
    render(){
        return(
            <div className="container-fluid mt-4 py-2" style={{backgroundColor:"rgb(187 247 208)"}}>
                <div className="row">
                    <p className="text-center fs-5 fw-bold text-black">news24x7.com @ Copyright 2024</p>
                </div>
            </div>
        )
    }
}