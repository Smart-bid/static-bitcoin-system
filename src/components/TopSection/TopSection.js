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
        this.state = {
            showModal: false
        }
    }

    componentDidMount() {
        setTimeout(()=> this.setState({showModal: true}),2000)
    }

    handleClose() {
        this.setState({showModal: false})
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className='TopSection'>

                <Header languageManager={this.props.languageManager}/>

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

                <section className={(this.state.showModal) ? 'modal-window active' : 'modal-window'}>
                    <div className="wrapper">
                        <div className={(this.props.syncState.errors.responseError) ? 'heading hidden' : 'heading'}>
                            <div className="red-label">
                                <h3>
                                    {languageManager.modal_regform_title[0]}
                                </h3>
                            </div>
                            <h5>
                                {languageManager.modal_regform_title[1]}
                            </h5>
                        </div>
                        <Regform {...this.props} />
                        <div className="close-modal-window">
                            <span onClick={this.handleClose.bind(this)}>{languageManager.close_modal_regform}</span>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
