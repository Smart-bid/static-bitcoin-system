import React, { Component } from 'react'
import People  from './People/People'

import logo from './logo.svg'

export default class Header extends Component {
    constructor(props) {
        super(props);

        let today = new Date(),
            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
            random = Math.floor(Math.random() * 4) + 1;

        this.state = {
            date: date,
            randomNum: random,
        };
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <header className='Header'>
                <div className="wrapper">
                    <div className="counter">
                        <div className="wrap">
                            <span>
                                <strong>{this.state.randomNum}</strong>&nbsp;
                                {languageManager.copies}
                            </span>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <People languageManager={this.props.languageManager}/>
                </div>
            </header>
        )
    }
}
