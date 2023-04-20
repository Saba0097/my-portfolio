import "./Heroimg2Styles.css"


import React, { Component } from 'react'

class Heroimg2 extends Component {
    render() {
      return (
    <div className="Heroimg">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )   
    }
}

export default Heroimg2