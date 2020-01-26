import React, { Component } from "react";

class RenderMesh extends Component {
    constructor(){
        super()
        this.state = {
            a: ''
        }
    }

    daysInMonth(m, y) {
        let daysCount = new Date(y, m, 0).getDate();
        
        return daysCount
    }
    render() {
        let { month, year } = this.props
        
        return(
            <div>
                {this.daysInMonth(month, year)}
            </div>
        )
    }
}

export default RenderMesh