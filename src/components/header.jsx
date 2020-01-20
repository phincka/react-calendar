import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
             <header className="header">
                <h2 className="header--title"><a href="./"> BeerBook </a></h2>
             </header>
        );
    }
}

export default Header