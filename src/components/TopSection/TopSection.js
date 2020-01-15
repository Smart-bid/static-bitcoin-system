import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'
import JoinBtcSystem from './JoinBtcSystem/JoinBtcSystem'

//Videos
import bgVideo from './media/BG-transcode.mp4'
import mainVideo from './media/main.mp4'

export default class TopSection extends Component {
    constructor(props) {
        super(props)
    }
    handleScroll() {

        let panel = this.regPanel.current;

        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className='TopSection'>

                <Header languageManager={this.props.languageManager} handleScroll={this.handleScroll.bind(this)}/>

                <section className="main-banner">
                    <div className="container">
                        <div className="title">
                            <h1>
                                {languageManager.title[0]}
                                <span className="orange">{languageManager.title[1]}</span>
                                {languageManager.title[2]}
                                <span className="orange">{languageManager.title[3]}</span>
                            </h1>
                        </div>
                        <div className="wrapper-flex">
                            <VideoPlayer link={mainVideo} {...this.props}/>
                            <Regform {...this.props} />
                        </div>
                    </div>
                    <video autoPlay={true} loop={true}>
                        <source src={bgVideo}/>
                    </video>
                </section>

                <JoinBtcSystem {...this.props}/>

            </div>
        )
    }
}
