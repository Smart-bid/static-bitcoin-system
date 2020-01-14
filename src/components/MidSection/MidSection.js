import React, { Component } from 'react'
import Gallery from './Gallery/Gallery'
import Reviews from "./Reviews/Reviews";

export default class MidSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="MidSection">

                <Gallery languageManager={this.props.languageManager}/>

                <Reviews languageManager={this.props.languageManager}/>

            </div>

        )
    }
}
