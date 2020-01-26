import React, { Component } from "react";
import Header from './components/header'


import './css/main.scss';
import DaysLabel from "./components/daysLabels";
import CurrentMonth from "./components/currentMonth";
import RenderMesh from "./components/renderMesh";

class App extends Component {
    constructor(){
        super()
        const date = new Date()
        this.state = {
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }
    
    render() {
        const { month, year } = this.state
            return(
                <div>
                    <Header />
                    <CurrentMonth month={month} />
                    <DaysLabel />
                    <RenderMesh month={month} year={year} />
                </div>
            )
    }
}

export default App;
