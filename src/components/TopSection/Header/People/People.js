import React, { Component } from 'react'

//Images
import melicssa from './images/melicssa.jpg'
import brian from './images/brian.jpg'
import tiffany from './images/wendy.jpg'
import scott from './images/scott.jpg'
import roy from './images/roy.jpg'

export default class People extends Component {
    constructor(props) {
        super(props);
        var random = this.rand();
        this.state = {
            random: random,
            shakeClass: 'dynamic-person-img',
            images: {
                melicssa,
                brian,
                tiffany,
                scott,
                roy,
            }
        };
    }

    rand() {
        const random = Math.floor(Math.random() * 3);
        return random;
    }
    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function(){
            var random = _this.rand();
            _this.setState({
                random: random,
            })
        },5000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let languageManager = this.props.languageManager();
        const random = this.state.random
        return (
            <div className="People">
                <div className="person-img">
                    <img src={this.state.images[languageManager.customer[random].img]} alt=""/>
                </div>
                <div className="person-info">
                    <span className="person-name">{languageManager.customer[random].name} {languageManager.invest}</span>
                    <div className="earnings">
                        <strong className="currency" style={{width: "auto", height: "auto", border: "none"}}> {languageManager.currency}</strong>
                        <strong className="earn" style={{width: "auto", height: "auto", border: "none"}}>{languageManager.customer[random].earn}</strong>
                    </div>
                </div>
            </div>
        )

    }
}
