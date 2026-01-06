import React from "react";

export class Bulb extends React.Component{
    constructor(){
        super();
        this.state={
            image:"/off.jpg"
        }
    }
    bulbon=()=>{
        this.setState({
            image:"/on.jpg"
        })
    }
    bulbof(){
        this.setState({
            image:"/off.jpg"
        })
    }
    render(){
        return(
        <div className="b">
        <img src={this.state.image} alt=""  className="bulb-img" />
        <button onClick={this.bulbon}>bulb on</button>
        <button onClick={()=>{this.bulbof()}}>off</button>
        </div>
            
        )
    }

}