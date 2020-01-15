import React, {Component} from 'react'

import bitcoinLogo from "../media/Bitcoin.svg";
import bitcoinIcon from "./btc-icon.png";

export default class JoinBtcSystem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posX: null,
            posY: null,
        }
        this.count = this.count.bind(this)
    }

    Listener(e) {
        let mouseX = e.clientX * 0.04,
            mouseY = e.clientY * 0.04;
        //Coordinates X
        if(mouseX <= window.innerWidth / 2 * 0.04) {
            mouseX = mouseX - window.innerWidth / 2 * 0.04
        } else if(mouseX >= window.innerWidth / 2 * 0.04) {
            mouseX = mouseX - window.innerWidth / 2 * 0.04
        }
        //Coordinates Y
        if(mouseY <= window.innerHeight / 2 * 0.04) {
            mouseY = mouseY - window.innerHeight / 2 * 0.04
        } else if(mouseY >= window.innerHeight / 2 * 0.04) {
            mouseY = mouseY - window.innerHeight / 2 * 0.04
        }

        this.count(mouseX, mouseY)
    }
    count(mouseX, mouseY) {
        this.setState({
            posX: mouseX,
            posY: mouseY,
        });
    }

    componentDidMount() {
        document.addEventListener("mousemove",  e => this.Listener(e));
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove",  e => this.Listener(e));
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className="join-btc-system">
                <div className="container">
                    <div className="bitcoin-coin" style={{transform: `rotateX(${this.state.posX}deg) rotateY(${this.state.posY}deg)`}}>
                        <img src={bitcoinLogo} draggable={false} alt=""/>
                    </div>
                    <h2 className="section-heading">
                        {languageManager.join_title}
                    </h2>
                    <div className="wrapper-flex">
                        {
                            languageManager.join_description.map((item,i)=>{
                                return(
                                    <div className="item" key={i}>
                                        <img src={bitcoinIcon} alt=""/>
                                        <p>
                                            <span className="blue">{item.title}</span>
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        )
    }
}